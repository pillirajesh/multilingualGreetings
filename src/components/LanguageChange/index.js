import {Component} from 'react'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class LanguageChange extends Component {
  state = {
    activeImage: languageGreetingsList[0].imageUrl,
    activeAltText: languageGreetingsList[0].imageAltText,
  }

  render() {
    const {activeAltText, activeImage} = this.state

    return (
      <div className="container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="unordered-list-container">
          {languageGreetingsList.map(eachGreeting => {
            const activeTab =
              eachGreeting.imageAltText === activeAltText ? 'active-button' : ''

            const changeGreetingLanguage = () => {
              this.setState({
                activeImage: eachGreeting.imageUrl,
                activeAltText: eachGreeting.imageAltText,
              })
            }

            return (
              <li key={eachGreeting.id} className="unordered-list">
                <button
                  type="button"
                  className={`${activeTab} button`}
                  onClick={changeGreetingLanguage}
                >
                  {eachGreeting.buttonText}
                </button>
              </li>
            )
          })}
        </ul>
        <img src={activeImage} className="image" alt={activeAltText} />
      </div>
    )
  }
}

export default LanguageChange
