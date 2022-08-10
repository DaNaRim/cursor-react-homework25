import {library as fontawesome} from "@fortawesome/fontawesome-svg-core"
import {faMars, faVenus} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {rgba} from "polished"
import {Link} from "react-router-dom"
import styled from "styled-components"

fontawesome.add(faMars, faVenus)

const Contact = ({data}) => {
  const {username, firstName, lastName, phone, gender} = data

  return <ContactWrapper className="contact">
    <header>
      <Link to={`/contacts/${username}`} className="name">{firstName} {lastName}</Link>
      {getIconByGender(gender)}
    </header>
    <article className="contacts">
      <p className="phone">
        phone: <a href={`tel:${phone}`}>{formatPhoneNumber(phone)}</a>
      </p>
    </article>
  </ContactWrapper>
}

export default Contact

export function formatPhoneNumber(phone) {
  return phone.replace(/(\d{3})(\d{2})(\d{3})(\d{4})/, "$1 $2 $3 $4")
}

export function getIconByGender(gender) {
  switch (gender) {
    case "male": return <FontAwesomeIcon className="gender" icon="fa-solid fa-mars"/>
    case "female": return <FontAwesomeIcon className="gender" icon="fa-solid fa-venus"/>
    default: return null
  }
}

const ContactWrapper = styled.div`
  font-family: Montserrat, sans-serif;
  display: flex;
  flex-direction: column;
  width: 20rem;
  max-width: 20rem;
  margin: 0 1rem 2rem;
  padding: 1rem;;
  color: #404040;
  border-radius: 2rem;
  background-color: white;
  box-shadow: 0 1rem 1.5rem ${rgba("black", 0.5)};

  header {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 3rem;
    padding: 1rem 0;

    .name {
      font-size: 1.4rem;
      font-weight: 700;
      text-align: center;
      color: black;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .gender {
      font-size: 1.5rem;
      margin-top: 0.6rem;
      color: #a0a0a0;
    }
  }

  .contacts {
    display: flex;
    margin: 0 auto;

    .phone {
      font-size: 1.4rem;
      align-self: flex-end;
      margin: 1.6rem 0 1rem 0;

      a {
        cursor: pointer;
        color: inherit;
      }
    }
  }

  @media (max-width: 30rem) {
    width: 14.5rem;
    max-width: 14.5rem;

    .phone {
      display: flex;
      align-items: center;
      flex-direction: column;

      a {
        margin-top: 0.8rem;
      }
    }
  }
`