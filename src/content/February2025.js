import Highlight from './../components/Highlight'

export default function Febraury2025(){
    return(
        <div>
        <div>
          <p className="intro"> Welcome to The Nia Network! I'll be releasing new content the first Friday of the month so you can keep up with me, the people in my life (should they choose to be included), and whatever else I feel like including that month. Enjoy! </p>
        </div>
        <div className="highlights">
          <Highlight 
            imgsrc = "https://cloudfilesdm.com/postcards/image-1741152091130.jpeg"
            date = "February 6, 2025"
            title = "Galentines"
            description = "arts, crafts, and creating our own Wired Autocomplete Interviews (vlog coming soon!)"
            />
            <Highlight 
            imgsrc = "https://cloudfilesdm.com/postcards/image-1741152209618.jpeg"
            date = "February 9, 2025"
            title = "Superbowl"
            description = "2 pancit malabons and a dream"
            />
            <Highlight 
            imgsrc = "https://cloudfilesdm.com/postcards/image-1741152237849.jpeg"
            date = "February 15, 2025"
            title = "Brazilian Steakhouse"
            description = "picanha for me, cheese and honey for brad"
            />
        </div>
        <div className="TextSection">
          <h2> Little Wins </h2>
          <ol>
            <li> I am healthier than last year (proven by bloodwork!)</li>
            <li> Predicted Season 21 winner of Hell's Kitchen in episode 1</li>
            <li> Successfully master Ontario Airport (parked and bought dinner before arriving at the airport. Then at my dinner at my gate)</li>
          </ol>
        </div>
        <div className="TextSection">
          <h2> Gym Chats </h2>
          <p> Why do I go to the gym? </p>
          <ol>
            <li> My doctor said so</li>
            <li> Avoid traffic (on in-office days, going home at 5 takes 1.5 hours to get home, but going home at 6:30 or later only takes 40 minutes) </li>
            <li> I get to drink a matcha protein shake afterwards </li>
          </ol>
        </div>
        <div className="TextSection">
          <h2> Hot Takes</h2>
          <ol> 
            <li> Taxes aren't real - like why are they gatekeeping how many taxes we owe, then <em> charging us </em> to share that information? </li>
          </ol>
        </div>
        <div className="TextSection">
          <h2> Features</h2>
          <p className="QuickNote">
            FYI, this section is meant to be highlights of my friends and/or family if anyone wants a cute shoutout. But since this first newsletter is a surprise, Mike and Bryan are getting a shoutout!
          </p>
          <span>
            <a href=""> Avatar: Seven Havens</a> has been confirmed!
          </span>
        </div>
        <div className="TextSection">
          <div className="FlexDisplay">
            <h2>Coming Up...</h2><h3>(March Goals!)</h3>
          </div>
          <p className="QuickNote">
            Hopefully by telling you guys this, it'll really motivate me to get it done. I'll have updates on if I was able to accomplish them or not in next month's letter.
          </p>
          <ol>
            <li> Read at least 50 pages. (And if I read at leasy 75, then I will go buy myself a new Avatar comic book) </li>
            <li> Go gym 3x/week (average) (and if I average 4x/week, then I get to buy myself one (1) new article of gym clothing) </li>
          </ol>
        </div>
        <div className="TextSection">
          <h2> FAQ</h2>
          <ol>
            <li><em>What are you doing?</em> I had this idea on my way to work one day and I figured I should do it because it sounded fun</li>
            <li> <em> Can I unsubscribe? </em> Great question, no!</li>
            <li><em>How often can we expect a new newsletter?</em> Once a month! </li>
            <li> <em> How can I be featured?!</em> Call me, beep me</li>
          </ol>
        </div>
      </div>
    )
}