const express = require('express');
const router = express.Router();
const Opportunity = require('../models/Opportunity');

// GET /api/opportunities?page=1&limit=24&search=google&status=Applied
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 24;
    const skip = (page - 1) * limit;

    const { search, status } = req.query;

    // Dynamic Query Builder
    let query = {};

    if (search && search.trim() !== '') {
      query.$or = [
        { company: { $regex: search.trim(), $options: 'i' } },
        { role: { $regex: search.trim(), $options: 'i' } },
        { skillsRequired: { $regex: search.trim(), $options: 'i' } }
      ];
    }

    if (status && status !== 'All') {
      query.status = status;
    }

    // Parallel fetch: current page data + total count
    const [data, totalCount] = await Promise.all([
      Opportunity.find(query)
        .sort({ createdAt: -1, _id: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Opportunity.countDocuments(query)
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    res.json({
      success: true,
      data,
      pagination: {
        totalItems: totalCount,
        totalPages,
        currentPage: page,
        pageSize: limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Status update endpoint
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await Opportunity.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;