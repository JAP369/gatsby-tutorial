import React from "react"
import ReactAudioPlayer from "react-audio-player"
import styled from "styled-components"
import iitb from "../music/insaneinthebrain(Instrumental).mp3"
// import silverskies from '../../assets/music/silverskies.mp3';
// import lights from '../../assets/music/lights.mp3';

const MusicPlayeContainer = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
`

const MusicPlayeWrapper = styled.div`
  background: transparent;
  justify-content: center;
`

function MusicPlayer() {
  return (
    <>
      <MusicPlayeContainer>
        <MusicPlayeWrapper>
          <ReactAudioPlayer
            src={iitb}
            controls={false}
            autoPlay={true}
            preload="none"
            loop
            // hidePlayer={hideShowPlayer}
          />
        </MusicPlayeWrapper>
        {/* <p>
          <a
            href='https://pixabay.com/de/users/thommas68-2571842/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2202910'
            rel='noopener noreferrer'
            target='_blank'
          >
            Manila Grey
          </a>{' '}
          -{' '}
          <a
            href='https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2202910'
            rel='noopener noreferrer'
            target='_blank'
          >
            Silver Skies
          </a>
        </p> */}
      </MusicPlayeContainer>
    </>
  )
}

export default MusicPlayer
