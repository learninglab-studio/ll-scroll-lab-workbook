import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import YouTubeVotingMachine from '../../src/components/video/YouTubeVotingMachine'

export default function Page () {
    return (
        <div className='page'>
            <YouTubeVotingMachine />
        </div>
    )
}