import {library as fontawesome} from "@fortawesome/fontawesome-svg-core"
import {faMagnifyingGlass, faMars, faVenus} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {rgba} from "polished"
import {useEffect, useState} from "react"
import styled from "styled-components"
import {contacts as initialContacts} from "../data"
import Contact from "./Contact"
import Header from "./Header"

fontawesome.add(faMars, faVenus, faMagnifyingGlass)

const Contacts = () => {
  const [contacts] = useState(initialContacts)
  const [search, setSearch] = useState("")
  const [genders, setGenders] = useState(["male", "female", "undefined"])

  const [contactsToDisplay, setContactsToDisplay] = useState(contacts)

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleGenderChange = () => {
    setGenders([...document.querySelectorAll(".gender-checkbox")]
      .filter(cb => cb.checked)
      .map(cb => cb.value))
  }

  useEffect(() => {
    setContactsToDisplay(getContactsBySearchParams(contacts, search, genders))
  }, [contacts, search, genders])

  return (
    <ContactsWrapper>
      <Header/>
      <div className="content">
        <div className="search-panel">
          <input type="text" value={search} onChange={handleSearchChange}/>
          <div className="controls">
            <FontAwesomeIcon className="search-icon" icon="fa-solid fa-magnifying-glass fa-flip-horizontal"/>
            <div className="vertical-separator"></div>
            <div className="gender-checkboxes">
              <input type="checkbox" className="gender-checkbox" id="gender-male"
                     name="gender" value="male" defaultChecked="checked" onClick={handleGenderChange}/>
              <label htmlFor="gender-male">
                <FontAwesomeIcon className="gender" icon="fa-solid fa-mars"/>
              </label>

              <input type="checkbox" className="gender-checkbox" id="gender-female"
                     name="gender" value="female" defaultChecked="checked" onClick={handleGenderChange}/>
              <label htmlFor="gender-female">
                <FontAwesomeIcon className="gender" icon="fa-solid fa-venus"/>
              </label>

              <input type="checkbox" className="gender-checkbox" id="gender-non-gender"
                     name="gender" value="undefined" defaultChecked="checked" onClick={handleGenderChange}/>
              <label htmlFor="gender-non-gender">no gender</label>
            </div>
          </div>
        </div>
        <div className="contacts">
          {contactsToDisplay.length === 0 && getContactsNotFoundBlock()}
          {contactsToDisplay.map(contact => <Contact data={contact} key={`${contact.firstName}${contact.phone}`}/>)}
        </div>
      </div>

    </ContactsWrapper>
  )
}

export default Contacts

function getContactsBySearchParams(contacts, search, genders) {
  const lowerSearch = search.toLowerCase()

  return contacts.filter(contact => {
      const {firstName, lastName, phone} = contact

      return firstName.toLowerCase().includes(lowerSearch)
        || lastName.toLowerCase().includes(lowerSearch)
        || phone.includes(lowerSearch)
    }
  ).filter(contact => genders.includes(String(contact.gender)))
}

function getContactsNotFoundBlock() {
  return (
    <div className="contacts-not-found">
      <h2>Нічого не знайдено</h2>
    </div>
  )
}

const ContactsWrapper = styled.section`
  display: grid;
  min-height: inherit;
  background-image: linear-gradient(to bottom right, #ff9eaa 0% 65%, #e860ff 95% 100%);
  background-attachment: fixed;
  background-position: center;

  .content {
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;

    min-width: 100%;
    padding: 2rem 1rem;

    .search-panel {
      position: relative;
      width: 60%;
      margin-bottom: 3rem;

      input {
        font-size: 1.4rem;
        box-sizing: border-box;
        width: 100%;
        height: 3rem;
        padding: 0 16rem 0 2rem;
        color: #404040;
        border: none;
        border-radius: 2rem;
        background-color: white;
        box-shadow: 0 1rem 1.5rem ${rgba("black", 0.5)};

        &:focus {
          outline: none;
        }
      }

      .controls {
        position: absolute;
        top: 25%;
        right: 0.8rem;
        display: flex;
        height: 50%;

        .search-icon {
          font-size: 1.4rem;
          transform: scale(-1, 1);
        }

        .vertical-separator {
          margin: 0 0.5rem;
          border-right: 0.1px solid #404040;
        }

        .gender-checkboxes {
          display: flex;

          input {
            display: none;

            &:checked + label {
              background-color: rgba(255, 158, 170, 0.5);
            }
          }

          label {
            font-family: Montserrat, sans-serif;
            font-size: 1.2rem;
            margin-right: 0.5rem;
            padding: 0.1rem 0.5rem;
            cursor: pointer;
            text-align: center;
            border-radius: 2rem;
            background-color: #fff;
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }

    .contacts {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .contacts-not-found {
        font-family: "Raleway", sans-serif;
        font-size: 3.875rem;
        font-weight: 800;
        line-height: 4.5rem;
        margin-top: 10rem;
        text-align: center;
        text-transform: uppercase;
        color: #fff;
      }
    }
  }

  @media (max-width: 38rem) {
    .search-panel {
      width: 90%;
      margin-bottom: 8rem;

      input {
        padding-right: 3rem;
      }

      .controls {
        .vertical-separator {
          display: none;
        }

        .gender-checkboxes {
          position: absolute;
          top: 300%;
          right: 100%;
          width: fit-content;

          input:checked + label {
            color: #000;
            background-color: #fff;
          }

          label {
            font-size: 1.5rem;
            margin-right: 1rem;
            padding: 0.2rem 1rem 0.6rem;
            color: #fff;
            background-color: rgba(255, 158, 170, 0.5);

            &:last-child {
              margin-right: 1rem;
            }

            svg {
              padding-top: 0.9rem;
            }
          }
        }
      }
    }

    .contacts > .contacts-not-found {
      font-size: 3rem;
    }
  }
`