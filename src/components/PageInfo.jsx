import React, { Component } from 'react'

class PageInfo extends Component {
  render() {
    return (
      <section id="info">
        <div className="row flex-spaces tabs">
        <input id="tab1" type="radio" name="tabs" checked onChange={()=>null}/>
        <label htmlFor="tab1">What is <strong>Tubo</strong></label>

        <input id="tab2" type="radio" name="tabs" onChange={()=>null}/>
        <label htmlFor="tab2">How it works</label>

        <div className="content" id="content1">
          <p>
            <strong><em><a href="/">Tubo</a></em></strong> is free youtube to mp3 convertor service, our easy to use convertor you can convert <a href="https://www.youtube.com">YouTube</a> videos to audio (mp3) or video (mp4) files and download them for absolutely free - this service works on all modern browsers, on desktop, tablet and mobile(where you manage your own file system).
          </p>
          <p>
            The videos are always converted in the highest available quality. In opposition to other websites, you are able to convert videos which are not available or are blocked in your country. Please note that we can only convert videos up to a length of 3 hours - the limitation is necessary, so the conversion of any video will not take more than a few of minutes. The file will only be on our servers for 30 minutes before being deleted
          </p>
          <p>
            Let's tubo away!!
          </p>
        </div>
        <div className="content" id="content2">
          <p>
            To get started, it's simple.
          </p>
          <ol>
            <li>
              Go to <a href="https://www.youtube.com" target="_blank" rel="noreferrer">youtube.com.</a>
            </li>
            <li>
              Copy the video URL (example: youtube.com/watch?v=_uQL3hs765) of the video you would like to convert and paste it into our converter.
            </li>
            <li>
              Choose a format - audio (mp3) or video (mp4) - and click the convert button.
            </li>
            <li>
              As soon as the conversion is finished you can download the file by clicking on the download button.
            </li>
          </ol>
        </div>
      </div>
    </section>
    )
  }
}

export default PageInfo;