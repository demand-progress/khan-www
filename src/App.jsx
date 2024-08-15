import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className='logo' />
      <div className='top'>
        <div className='container mx-auto'>
          <h1>
            Lina Khan stands up for the little guy.
            <span>
              What about us big guys?
            </span>
          </h1>
          <div className='b4b' />
        </div>
      </div>
      <div className='quote container mx-auto'>
        Lina Khan must be fired so we can continue our untrammeled profiteering.
      </div>
      <div className='containerx mx-auto'>
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          autoPlay
          infiniteLoop
          
        >
          <div className='bill hoffman'>
            <p>"A person who is… not helping America"</p>
            <div>
              <a href="https://www.reuters.com/world/us/two-billionaire-harris-donors-hope-she-will-fire-ftc-chair-lina-khan-2024-07-26/" target='_blank' className='name'>- Reid Hoffman</a>
              <p> Linked-In Founder, Microsoft Board Member, <span>Billionaire.</span></p>
            </div>
            <div className='caption'>image: <a href="https://commons.wikimedia.org/wiki/File:221017-D-BN624-0280_(52436096810)_(cropped).jpg" target='_blank'>US Secretary of Defense</a></div>
          </div>
          <div className='bill diller'>
            <p>"I think she’s a dope."</p>
            <div>
              <a href="https://www.foxbusiness.com/politics/two-billionaire-harris-donors-want-her-fire-ftc-chair-lina-khan#" target='_blank'  className='name'>- Barry Diller</a>
              <p>Fox Founder, Businessman, <span>Billionaire.</span></p>
            </div>
            <div className='caption'>image: <a href="https://en.wikipedia.org/wiki/Barry_Diller#/media/File:Barry_Diller_Shankbone_Metropolitan_Opera_2009.jpg" target='_blank' >David Shankbone</a></div>
          </div>
          <div className='bill'>
            <p>“We all think the FTC has lost their center.”</p>
            <div>
              <a href="https://www.livemint.com/news/world/business-moguls-urge-harris-to-dump-biden-s-ftc-chair-lina-khan-11722451036463.html" target='_blank'  className='name'>- Barry Sternlicht</a>
              <p>Starwood Hotels Founder, Investment Fund CEO, <span>Billionaire.</span></p>
            </div>
            <div className='caption'>image: <a href="https://commons.wikimedia.org/wiki/File:Barry_sternlicht.jpg" target='_blank'> Christopher Michel</a></div>
          </div>
          <div className='bill kohsla'>
            <p>"Not a rational human being."</p>
            <div>
              <a href="https://www.forbes.com/sites/johnkoetsier/2024/06/19/billionaire-investor-vinod-khosla-says-ftc-chair-lina-khan-not-a-rational-human-being/" target='_blank'  className='name'>- Vinod Kohsla</a>
              <p>Sun Microsystems Founder, Venture Capitalist, <span>Billionaire.</span></p>
            </div>
            <div className='caption'>image: <a href="https://www.flickr.com/photos/x180" target='_blank'>James Duncan Davidson</a></div>
          </div>
        </Carousel>
      </div>
      <div className='quote container mx-auto'>
        We’ve given a lot of money,<br/>
        <span className='underline'>I mean A LOT</span>. Is there <a href="https://www.levernews.com/dems-billionaire-tech-donor-presses-harris-to-fire-antitrust-regulator/" target='_blank'>no return on our investment</a>?
      </div>
      <div className='alt'>
        <h3>Here are a few examples of the way she and her allies across the administration have attacked our ritzy way of life:</h3>
        <ul>
          <li>
            <b>Suing us:</b>
            The FTC and DOJ have brought <a href="https://www.justice.gov/opa/pr/justice-department-sues-live-nation-ticketmaster-monopolizing-markets-across-live-concert" target='_blank'>lawsuit </a> after <a href="https://apnews.com/article/apple-antitrust-monopoly-app-store-justice-department-822d7e8f5cf53a2636795fcc33ee1fc3" target='_blank'>lawsuit</a>  against our monopolistic practices.
          </li>
          <li>
            <b>Making rules we hate:</b>
            For some reason Khan keeps trying to make it <a href="https://www.ftc.gov/news-events/news/press-releases/2024/04/fact-sheet-ftcs-proposed-final-noncompete-rule" target='_blank'>easier for people to find jobs and harder for us to lock them into jobs they hate</a>. 
          </li>
          <li>
            <b>Stopping our Junk Fee scam:</b>
            By stopping bogus fees, the <a href="https://www.ftc.gov/news-events/news/press-releases/2023/10/ftc-proposes-rule-ban-junk-fees" target='_blank'>FTC</a> and <a href="https://www.consumerfinance.gov/rules-policy/junk-fees/" target='_blank'>CFPB </a> have been trying to cut off an easy and painless (for us) way for us to extract money from hardworking people. 
          </li>
          <li>
            <b>Keeping prices (and our profits) low:</b>
            The FTC has <a href="https://www.ufcw400.org/2024/02/27/ufcw-local-unions-applaud-the-ftc-decision-to-reject-kroger-and-albertsons-proposed-megamerger/" target='_blank'>stopped grocery mergers</a> that could have hiked prices, and has worked to <a href="https://www.ftc.gov/reports/annual-report-standard/ftc-2012/containing-costs-prescription-drugs" target='_blank'>keep drug prices down</a>. 
          </li>
        </ul>
      </div>
      <div className='quote container mx-auto'>
        With these kinds of policies, how are we supposed to make our next billion dollars??
      </div>
      <footer>
        <p>Paid for by Billionaires for Endless Power PAC*</p>
        <p className='alt'>*Billionaires for Endless Power PAC is not an actual PAC. (Obviously)</p>
      </footer>
    </div>
  )
}

export default App
