import {rgba} from "polished"
import React, {Component} from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"
import LOADING_SPINNER from "../assets/gif/Spinner-1s-200px.gif"
import {contacts} from "../data"
import {formatPhoneNumber, getIconByGender} from "./Contact"
import Header from "./Header"

class ContactPage extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      contact: this.getCurrentContact()
    }
  }

  componentDidMount() {
    this.updateState()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.location.key !== this.props.location.key) {
      this.updateState()
    }
  }

  getCurrentContact() {
    const contact0 = contacts.filter(contact => contact.username === this.props.match.params.username)[0]
    if (!contact0.description) {
      this.getDescription().then(result => contact0.description = result)
    }
    if (!contact0.profileImage) {
      this.getProfileImage().then(result => contact0.profileImage = result)
    }
    return contact0
  }

  updateState() {
    if (this.getCurrentContact() !== this.state.contact) {
      this.setState({contact: this.getCurrentContact()})
    }
    setTimeout(() => this.setState(this.state), 500)
  }

  getDescription() {
    return fetch("https://icanhazdadjoke.com/", {
      headers: {"Accept": "application/json"}
    })
      .then(res => res.json())
      .then(({joke}) => joke)
  }

  getProfileImage() {
    return fetch("https://source.unsplash.com/random/600x600?face")
      .then(res => res.url)
  }

  sendMessage() {
    const contact0 = this.getCurrentContact()
    contact0.isMessageSent = true
    this.setState({contact: contact0})
  }

  render() {
    const {username, firstName, lastName, phone, gender, profileImage, description} = this.state.contact

    return (
      <div>
        <Header/>
        <ContactsMiniWrapper>
          {contacts.map(contact => (
            <Link to={`/contacts/${contact.username}`}
                  className={"contact_mini" + (contact.username === username ? " current_contact" : "")}
                  key={Math.random()}>
              {contact.firstName} {contact.lastName}
            </Link>
          ))}
        </ContactsMiniWrapper>
        <ContactWrapper>
          <header>
            {profileImage
              ? (<img src={`${profileImage}`} alt="profile"/>)
              : (<img src={LOADING_SPINNER} alt="loading..."/>)
            }
            <h3 className="name">{firstName} {lastName}</h3>
            {getIconByGender(gender)}
          </header>
          <div className="description">{description}</div>
          <article className="contacts">
            <p className="phone">
              phone: <a href={`tel:${phone}`}>{formatPhoneNumber(phone)}</a>
            </p>
          </article>
          <div className="message-form">
            {this.state.contact.isMessageSent
              ? (<h3>Message sent... I promise <br/> Don't write to me again.</h3>)
              : [
                <textarea placeholder="Type your message here..."/>,
                <button className="btn" onClick={this.sendMessage.bind(this)}>Send</button>
              ]
            }
          </div>
        </ContactWrapper>
      </div>
    )
  }
}

export default ContactPage

const ContactWrapper = styled.div`
  font-family: Montserrat, sans-serif;
  display: flex;
  flex-direction: column;
  width: 20rem;
  max-width: 20rem;
  margin: 2rem auto 0;
  padding: 1rem;
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
    padding-bottom: 1rem;

    img {
      box-sizing: border-box;
      width: 6rem;
      height: 6rem;
      margin-bottom: 1rem;
      border: 0.3rem solid #fff;
      border-radius: 100%;
      box-shadow: 0 0.5rem 1rem ${rgba("black", 0.3)};
    }

    .name {
      font-size: 1.4rem;
      font-weight: 700;
      text-align: center;
      color: black;
    }

    .gender {
      font-size: 1.5rem;
      margin-top: 0.6rem;
      color: #a0a0a0;
    }
  }

  .description {
    text-align: center;
    color: #a0a0a0;
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

  .message-form {
    width: 100%;

    textarea {
      min-width: 100%;
      max-width: 100%;
      min-height: 2rem;
    }

    button {
      font-weight: bold;
      box-sizing: border-box;
      width: 100%;
      margin: 1rem 0;
      padding: 0.8rem;
      transition: background-color 100ms ease-in-out, transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
      border: none;
      border-radius: 1.5rem / 50%;
      outline: none;
      background-color: #ffd01a;

      &:hover {
        transform: scale(1.1);
        background-color: #efb10a;
      }

      &:active {
        transform: scale(1);
        background-color: #e8a200;
      }
    }

    h3 {
      text-align: center;
    }
  }
`

const ContactsMiniWrapper = styled.div`
  position: absolute;

  .contact_mini {
    font-family: Montserrat, sans-serif;
    display: block;
    width: 10rem;
    max-width: 20rem;
    margin: 1rem;
    padding: 1rem;
    text-decoration: none;
    color: #404040;
    border-radius: 2rem;
    background-color: white;
    box-shadow: 0 1rem 1.5rem ${rgba("black", 0.5)};

    &:active {
      color: inherit;
    }

    &.current_contact {
      background-color: #ffd01a;
    }
  }
`