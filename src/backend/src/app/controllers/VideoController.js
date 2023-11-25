import VideoRepository from '../repositories/VideoRepository.js';

class VideoController {
    async index(req, res) {
        const row = await VideoRepository.findAll()
        res.json(row)
    }

    async store(req, res) {
        const video = req.body
        const row = await VideoRepository.create(video)
        res.json(row)
    }
    async update(req, res) {
        const video = req.body
        const videoId = req.params.videoId
        const row = await VideoRepository.update(video, videoId)
        res.json(row)
    }
    async delete(req, res) {
        const videoId = req.params.videoId
        const row = await VideoRepository.delete(videoId)
        res.json(row)
    }
}

export default new VideoController()