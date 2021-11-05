/*
    Toan Phan - toanphan@berkeley.edu
*/

import React, { useState } from 'react'; 
import { Fragment, useRef} from 'react';
import './Player.css'
import Button from '@mui/material/Button';
import { Checkbox, TextField} from '@mui/material';

function Player ({divId, width, height}) {

    // hooks
    const video = useRef(null);
    const [newUrl, setNewUrl] = useState("");
    const [newWidth, setNewWidth] = useState("");
    const [newHeight, setNewHeight] = useState("");
    const [newVolume, setNewVolume] = useState("");

    // Methods 
    const load = (url) => {
        video.current.src = url;
    }

    const play = () => {
        video.current.play();
    }

    const pause = () => {
        video.current.pause();
    }

    const resize = (width, height) => {
        video.current.height = height;
        video.current.width = width;
    }

    // Getters 
    const getHeight = () => {
        return video.current.height;
    }

    const getWidth = () => {
        return video.current.width;
    }

    const getVolume = () => {
        return Math.floor(video.current.volume * 100);
    }

    const getMute = () => {
        return video.current.muted;
    }

    // return an integer = length of video in seconds.
    const getDuration = () => {
        return Math.floor(video.current.duration);
    }

    const getPlaybackState = () => {
        if (video.current.ended) {
            return "ended";
        } else if (video.current.paused) {
            return "paused";
        } else {
            return "playing";
        }
    }

    // Setters 
    const setAutoplay = (autoplay) => {
        video.current.autoplay = autoplay;
    }

    const setVolume = (volume) => {
        video.current.volume = volume / 100;
    }

    const setMute = (mute) => {
        video.current.muted = mute;
    }

    const setFullscreen = (fullscreen) => {
        if (fullscreen) {
            video.current.requestFullscreen();
        }
    }

    // render 
    return (
        <Fragment>
            <br></br>
            <br></br>
            <div id={divId}>
                <video ref={video} id="video" height={height} width={width} autoplay={false}>
                    <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
                    Not supported browser.
                </video>
            </div>
            <br></br>

            <div id="api">
            <h2>API Functions</h2>
            <Button variant="outlined" onClick={() => play()}>Play</Button>

            <Button variant="outlined" onClick={() => pause()}>Pause</Button>

            <Button variant="outlined" 
                    onClick={() => alert(`Height: ${getHeight()}px`)}>Get Height</Button>

            <Button variant="outlined" 
                    onClick={() => alert(`Width: ${getWidth()}px`)}>Get Width</Button>

            <Button variant="outlined" 
                    onClick={() => alert(`Mute: ${getMute()}`)}>Get Mute</Button>

            <Button variant="outlined" 
                    onClick={() => alert(`Volume: ${getVolume()}%`)}>Get Volume</Button>

            <Button variant="outlined" 
                    onClick={() => alert(`Video duration: ${getDuration()} seconds`)}>Get Duration</Button>

            <Button variant="outlined" 
                    onClick={() => alert(`Playback state: ${getPlaybackState()}`)}>Get PlaybackState</Button>

            <br></br>
            <br></br>

            <Button variant="outlined" id="load" type="submit" onClick={() => {
                load(newUrl);
                alert(`done loading new URL: ${newUrl}`)
                setNewUrl("");
            }}>Load URL</Button>

            <TextField
                style = {{width: 500}}
                variant="outlined"
                type="text"
                placeholder="enter a new video URL"
                helperText="URL"
                value={newUrl} 
                onChange={(e) => setNewUrl(e.target.value)}/>

            <br></br>
            <br></br>

            <Button 
                variant="outlined" 
                id="resize" 
                type="submit" 
                onClick={() => {
                resize(newWidth, newHeight);
                alert(`new (width X height) = ${newWidth}px X ${newHeight}px`)
                setNewWidth("");
                setNewHeight("");
            }}>Resize</Button>

            <TextField 
                size="small"
                variant="outlined"
                type="number"
                helperText="Width (px)"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}}
                value={newWidth}
                placeholder="Enter a new width"
                onChange={(e) => setNewWidth(e.target.value)}/>

            <TextField 
                size="small"
                placeholder="Enter a new height"
                variant="outlined"
                type="number" 
                helperText="Height (px)"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                value={newHeight}
                onChange={(e) => setNewHeight(e.target.value)}/>

            <br></br>
            <br></br>

            <Button variant="outlined" id="resize" type="submit" onClick={() => {
                setVolume(newVolume);
                alert(`new volume set at ${newVolume}%`)
                setNewVolume("");
            }}>Set Volume</Button>

            <TextField 
                size="small"
                variant="outlined"
                type="number" 
                value={newVolume}
                placeholder="Enter a new volume"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                helperText="Volume (0 - 100)"
                onChange={(e) => setNewVolume(e.target.value)}/>
          
            <br></br>
            <br></br>

            <Button variant="outlined" onClick={() => {
                let fullscreen = document.getElementById("fsBox").checked;
                alert(`fullscreen mode is ${fullscreen}`)
                setFullscreen(fullscreen)
            }}>Set Fullscreen (true if checked)</Button>
            <Checkbox 
                id="fsBox"
                type="checkbox"/>
            
            <br></br>
            <br></br>
            
            <Button variant="outlined" onClick={() => {
                let autoplay = document.getElementById("autoplayBox").checked;
                alert(`autoplay mode is ${autoplay}. Load a new video url to test autoplay.`)
                setAutoplay(autoplay)
            }}>Set Autoplay (true if checked)</Button>
            <Checkbox 
                id="autoplayBox"
                type="checkbox"/>
         
            <br></br>
            <br></br>

            <Button variant="outlined" onClick={() => {
                let mute = document.getElementById("muteBox").checked;
                alert(`mute is set to ${mute}`)
                setMute(mute);
                }}>Set Mute (true if checked)</Button>
            <Checkbox
                id="muteBox"
                type="checkbox"/>
          
            <br></br>
            <br></br>
          
            </div>
        </Fragment>
    );
}

export default Player;