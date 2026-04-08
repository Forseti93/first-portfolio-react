import { React, useEffect, useRef, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelopeOpenText,
  faEnvelopeCircleCheck,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

export default function MobileContact() {
  //changes title letters class for hover animation
  const [letterClass, setLetterClass] = useState('text-animate')
  //to add indicator on the contact form about status
  const [emailSent, setEmailSent] = useState()
  //to hide loader from the page
  const [loader, setLoader] = useState()
  //googlemap

  //to focus on form input
  const wtiteMe = useRef()
  const focusInput = () => {
    wtiteMe.current.focus()
  }

  //#region to use EmailJS
  const refContactForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setEmailSent('sending')

    emailjs
      .sendForm(
        'service_yr46c15',
        'template_xq0tzus',
        refContactForm.current,
        '9hJI7XNGvHuiJyVsO'
      )
      .then(
        (result) => {
          setEmailSent(true)
        },
        (error) => {
          setEmailSent(false)
          console.log(error)
        }
      )
  }
  //#endregion

  //to change class after animation to 'contact us' was played
  //to hide loader
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
      setLoader('hide')
    }, 1500)
  }, [])

  //#region google maps
  //Niko 46.983499507675, 31.995977110594556

  //#endregion

  return (
    <>
      <div className="contact">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            ind={1}
          />
        </h1>
        <p className="contact-description" onClick={focusInput}>
          Competitive quality, timelines and fair pricing. Flexible payment methods.
        </p>
        <p className="contact-description" onClick={focusInput}>
          For all questions - write
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
        </p>
        <form
          className="contact-form"
          ref={refContactForm}
          onSubmit={sendEmail}
        >
          <div className="left">
            <input
              type="text"
              name="name"
              placeholder="Name"
              ref={wtiteMe}
              required
            />
          </div>
          <div className="right">
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
          <input type="text" name="email" placeholder="Email" required />
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <div className="contact-form_status">
            {emailSent === 'sending' ? (
              <span className="contact-form_status-sending">
                Sending... <FontAwesomeIcon icon={faEnvelope} />
              </span>
            ) : emailSent ? (
              <span className="contact-form_status-ok">
                Sent <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
              </span>
            ) : emailSent === undefined ? (
              ''
            ) : (
              <span className="contact-form_status-error">
                Error <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
              </span>
            )}
            <button>SEND</button>
          </div>
        </form>
      </div>
      <div className="info-map">
        Located in: <br />
        Ukraine, <br />
        Mykolaiv, <br />
        Pushkinska St. <br />
        <span>sergeylavrenov93@gmail.com</span>
      </div>
      <div className="backgroung-for-map"></div>
      <div className="map-wrap">
        <MapContainer
          center={[50.41683878036608, 30.62345551767815]}
          zoom={4}
          zoomControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[50.41683878036608, 30.62345551767815]}></Marker>
        </MapContainer>
      </div>

      <div className={loader}>
        <Loader type="pacman" />
      </div>

      {/* <!-- emailJS  --> */}
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      ></script>
      <script type="text/javascript">
        {(function () {
          emailjs.init('9hJI7XNGvHuiJyVsO')
        })()}
      </script>

      {/* <!-- leafletjs -->
  <!-- Make sure you put this AFTER Leaflet's CSS --> */}
      <script
        src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
        integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
        crossOrigin=""
      ></script>
    </>
  )
}
