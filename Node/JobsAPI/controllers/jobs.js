const Job = require('../models/job-schema')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userID }).sort('createdAt')
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length })
}

const getJob = async (req, res) => {
  const { userID } = req.user
  const { id: JobID } = req.params
  const job = await Job.findOne({
    _id: JobID,
    createdBy: userID,
  })
  if (!job) {
    throw new NotFoundError(`no job with id ${jobID}`)
  }

  res.status(statusCodes.OK).json({ job })
}

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userID
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
}

const updateJob = async (req, res) => {
  const { company, position } = req.body
  const { userID } = req.user
  const { id: jobID } = req.params

  if (!company || !position) {
    throw new BadRequestError('company and position fields must be filled')
  }
  const job = await Job.findByIdAndUpdate(
    { _id: jobID, createdBy: userID },
    req.body,
    { new: true, runValidators: true }
  )

  if (!job) {
    throw new NotFoundError(`no job with id ${jobID}`)

  }
  res.status(StatusCodes.OK).json({ job })
}

const deleteJob =async (req, res) => {
  const {
    user: { userID },
    params: { id: jobID }

  } = req
  const job = await Job.findByIdAndRemove({
    _id: jobID,
    createdBy: userID,

  })
  if (!job) {
    throw new NotFoundError(`no job with id ${jobID}`)

  }
  res.status(StatusCodes.OK).json({ job })
}

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob }