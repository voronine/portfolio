//react
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { useSelector, useDispatch } from 'react-redux'

//form validation f()
import formValidation from './contactValidation';

//selectors
import { validation } from '../../features/contacts/selectors';

//slice
import { setInputName, setInputEmail } from '../../features/contacts/slice';

//styles
import styles from './Contact.module.scss'

const Contact: React.FC = () => {

  const form = useRef<HTMLFormElement | null>(null);

  const dispatch = useDispatch()
  const { inputName, inputEmail, checkValidName, checkValidEmail } = useSelector(validation)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (formValidation(inputName, inputEmail, dispatch)) {

      //is there an object form?
      form.current && emailjs.sendForm('service_alslkgq', 'template_q034o4l', form.current, 'voronin.yevhenii@gmail.com')

      dispatch(setInputEmail(''))
      dispatch(setInputName(''))

      e.currentTarget.reset()
    }
  };

  return (
    <section className={`${styles.contact} section`} id="contact">
      <h2 className={`${styles.contactTitle} section__title`}>Get in Touch</h2>
      <span className={`${styles.contactSubTitle} section__subTitle`}>Contact Me</span>
      <div className={`${styles.contactContainer} container grid`}>
        <div className={styles.contactContent}>
          <h3 className={styles.contactTitle}>Talk to me</h3>
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <i className={`bx bx-mail-send ${styles.contactCardIcon}`} />
              <h3 className={styles.contactCardTitle}>Email:</h3>
              <span className={styles.contactCardData}>voronin.yevhenii@gmail.com</span>
              <a className={styles.contactButton} href="mailto:voronin.yevhenii@gmail.com">Write me <i className={`${styles.contactButtonIcon} bx bx-rigth-arrow-alt`} /></a>
            </div>
            <div className={styles.contactCard}>
              <i className={`bx bxl-telegram ${styles.contactCardIcon}`} />
              <h3 className={styles.contactCardTitle}>Telegram</h3>
              <span className={styles.contactCardData}>+380 99 004 89 47</span>
              <a className={styles.contactButton} rel="noreferrer" target="_blank" href="https://t.me/voronine">Write me <i className={`${styles.contactButtonIcon} bx bx-rigth-arrow-alt`} /></a>
            </div>
            <div className={styles.contactCard}>
              <i className={`bx bxl-linkedin-square ${styles.contactCardIcon}`} />
              <h3 className={styles.contactCardTitle}>LinkedIn</h3>
              <span className={styles.contactCardData}>Check out my linkedin</span>
              <a className={styles.contactButton} rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/yevhenii-voronin-kyiv/">Follow me <i className={`${styles.contactButtonIcon} bx bx-rigth-arrow-alt`} /></a>
            </div>
          </div>
        </div>
        <div className={styles.contactContent}>
          <h3 className={styles.contactTitle}>Send me your offer</h3>
          <form
            className={styles.contactForm}
            ref={form}
            onSubmit={sendEmail}>
            <div className={styles.contactFormDiv}>
              <label className={styles.contactFormTag}>Name*</label>
              <input
                onChange={(e) => dispatch(setInputName(e.target.value))
                }
                value={inputName}
                className={styles.contactFormInput}
                type="text"
                name='name'
                placeholder='Insert your name' />
              {!checkValidName && <span className={styles.incorrectNameValue}>Only letters available</span>}
            </div>
            <div className={styles.contactFormDiv}>
              <label htmlFor='mail' className={styles.contactFormTag}>Mail*</label>
              <input
                id='mail'
                onChange={(e) => dispatch(setInputEmail(e.target.value))}
                value={inputEmail}
                className={styles.contactFormInput}
                type="text"
                name='name'
                placeholder='Insert your email' />
              {!checkValidEmail && <span className={styles.incorrectNameValue}>
                Invalid email address entered
              </span>}
            </div>
            <div className={`${styles.contactFormDiv} ${styles.contactFormArea}`}>
              <label className={styles.contactFormTag}>Company</label>
              <textarea
                className={styles.contactFormInput}
                name="project"
                placeholder='Describe your offer and company' />
            </div>
            <span className={styles.contactRequired}>* - Required fields</span>
            <button
              type='submit'
              className='button button--flex'  >
              Send Message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill='#fff'
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill='#fff'
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact



