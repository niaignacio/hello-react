import Highlight from './../components/Highlight'
import Navbar from './../components/TopNavbar'
import ScriptLine from './../components/ScriptLine'
import March25_Feature from './../images/MAR25_Feature.jpg'
import HighlightBP from './../images/HIGHLIGHT_BP.JPG'
export default function March2025(){
    return(
        <div>
            <div className="intro">
                <strong> Announcement! </strong>
                <p> My vlog is back! Watch the trailer here: <a href="https://www.youtube.com/watch?v=VmOMj3qLTDY&ab_channel=NiaRae" target="_blank"> 2025 Vlog Reboot </a></p>
            </div>
            <div className="highlights">
                <h2> Short Stories </h2>
                <Highlight
                    imgsrc = "https://files.ds106.us/wp-content/uploads/sites/4/2014/12/placeholder.png"
                    date = "March 8, 2025"
                    title = "Downtown Disney"
                    description = "Pretzels, Beignets, and Sup Noodle Bar to end the night"
                    />
                <Highlight
                    imgsrc = {HighlightBP}
                    date = "March 17, 2025"
                    title = "My Trip to the Emergency Room"
                    description = "Chemical exposure in my apartment put me in the ER. Should we sue?"
                    />
                <Highlight
                    imgsrc = ""
                    date = "March 19, 2025"
                    title = "First Time LAX Driver"
                    description = "I drove Brad Chang to LAX! Not a single wrong turn, not sure what I was so scared of this whole time. You guys LMK if you need a ride to/from LAX"
                    />
                <Highlight
                    imgsrc = ""
                    date = "March 21, 2025"
                    title = "Wisdom Tooth Extraction"
                    description = "Yes I went under. Pictured: Having my last solid meal the night before w/ the homies (Karyn, John, and Markella)"
                    />
            </div>
            
            <div className="TextSection" id="GoalsFollowUp">
                <h2> March Goals - Was I successful? </h2>
                <ol>
                    <li> <strong> Go to the gym 3x/week? </strong> So, from 3/1-3/17, I went to the gym 11 times. I was actually on track to be there 4x/week, but the whole ER thing ruined my plans. Therefore, I was ultimately unsuccessful reaching this goal this month :( </li>
                    <li> <strong> Read at least 50 pages? </strong> Work in progress... </li>
                </ol>
                <div className="FlexDisplay">
                    <h3>Coming Up...</h3><h4>(April Goals!)</h4>
                </div>
                <span> I'm actually just going to repeat the goals from last month. And! Going to try to see if I can squat 20lbs by the end of April (currently at 15lbs) (on both sides of the bar) </span>
            </div>
            <div className="TextSection">
                <h2> Features: DITL of 4 sisters in different careers </h2>
                <div class="FeatureContainer">
                    <p>
                        Hourly updates on how my sisters and I spend our days at work. Bonus, unreleased information: Lana is the only one who completed taking all of the pictures on the day we had planned on creating the video. Enjoy the full video <a href=""> on TikTok</a>! :)
                    </p>
                    <div class="imgContainer">
                        <img src={March25_Feature} alt="Collage of Keana, Lana, Megan, Nia" />
                    </div>
                </div>
            </div>
            <div> 
            <div className="TextSection">
                <div className="FlexDisplay">
                    <h2>Coming Up...</h2><h3>(April Goals!)</h3>
                </div>
            </div>
            <div className="TextSection">
                <h2> The ER Story </h2>
                <p className="QuickNote">
                    This story is crazy. Lots of details. I don't blame you if you don't want to read the whole thing.
                </p>
                <p>
                    It was a WFH day. I came home from my lunch break (leg day at the gym btw. Hack Squatted 15lbs). But smell something SO strong in the kitchen?? I go investigate, but not really, I eat my protein muffin and I submit a maintenance request.Go to my room, continue working in my room!
                    <br /><br />
                     ~1hr later, I started smelling it in my room now, and it's really only getting stronger. After it being in my room for 10-15 minutes, I started feeling lightheaded. I'm like, OK, well, no need for me to stay here. I'll just go finish the rest of my workday from the coffee shop. 
                     <br /><br />
                    Before I leave, I stop by the apartment management office. They close at 5 or 6 and it's around 3PM, so I need them to make sure they send someone to my place to check it out before the workday ends. <strong> Important part of the story! I told them I was concerned that it was a <em> gas leak </em>!</strong> And they say, sure, we'll send someone to check it out.
                    <br />
                    I drive down the street, the coffee shop is less than 10 minutes away, and in those 10 minutes I developed:
                    <ul>
                        <li> A throbbing headache</li>
                        <li> nausea </li>
                        <li> dizziness </li>
                    </ul>
                    So I'm making calls to Brad and my mom, telling them how I'm feeling, what I said to the apartment managers. My mom goes, you need to go to the ER??? Call 911 right now omg! But I was like nah I think I can drive myself over to the ER or Urgent Care or wherever. But she's scared and she ends up calling 911 FOR ME!
                    <br /><br />
                    Then, I get a call from the Fire Department, and they're asking me about my gas leak suspicions, and then they say "OK I'm going to send the fire department over and an ambulance for you". Then, the fire truck shows up at the coffee shop 😭 Here's that conversation:
                    <div className="HollywoodScript">
                        <ScriptLine speaker="Firefighter" line="We got a call about a gas leak?" />
                        <ScriptLine speaker="Me" line="Yeah, but the gas leak isn't... here? It's at my apartment. But also, I'm not sure if it was a gas leak, I just know I smelled something funny." />
                        <ScriptLine speaker="Firefighter" line="It's okay if it's not, but if there's any concern then it should be checked out. Did you tell anyone about it before you left?" />
                        <ScriptLine speaker="Me" line="Yeah, I told the apartment manager and they said they would send a maintenance person over to check it out. I wasn't feeling good though, so I left and I'm here now" />
                        <ScriptLine speaker="Firefighter" line="Oh, no, they should've called the fire department right away. Even if you think it might not be a gas leak in the end, if they hear that concern they need to address it immediately??? Not just the maintenance guy???" />
                        <ScriptLine speaker="Me" line="Well, that's all they said to me" />
                    </div>
                    <br /><br />
                    Then, ambulance comes, I ride to the hospital.
                    <br /><br />
                    <div className="QuickNote"> Blood and needles mentioned in this part! </div>
                    The girl putting the IV in my elbow was not good 😭 Needle went in and I started BLEEDING, she's trying to clean it up and I thought I heard it be done and handled, and I finally look over (because I wasn't watching as this happens, obviously) and there is blood ALL OVER MY ARM, and some on my blanket. Crazy stuff.
                    <br /><br />
                    So the Doctor comes in, asks what happened, and he's saying they're going to test my blood for poison. He asks if I know what I was exposed to exactly, and we don't know! So a huge game of telephone starts, my mom (in the ER with me) calls Keana (driving from work to the ER), Keana calls my apartment managers to ask, and they say <strong> they don't know</strong>. All they know is there was a neighbor "reglazing their floors", and the fumes somehow ended up in my apartment. Information gets relayed back through the telephones, and the Doctor just says "okay, well we'll continue testing but it would be really great if we know what the exact chemical was"
                    <br /><br/>
                    New person comes in to take my blood. <strong> AND HE TOOK THE WRONG BLOOD? </strong> Of course, I didn't know this until I was at home, because I can't tell (as a non-healthcare worker). But my mom said that he arrived saying he was going to take blood from an <em> artieral vein</em>, and left saying he took blood from a <em> different vein</em>?? At that point, I'm not even sure how they ran any tests that they were planning to run.
                    <br /><br />
                    Time passes, they gave me stuff in the IV to sleep, I wake up feeling fine. Doctor comes back and says my blood looks good and I get discharged. The end (of the ER arc).
                </p>
                <p>
                    <h4> The Aftermath </h4>
                    <ul>
                        <li> Brad was supposed to fly back to San Jose this day. He cancelled his flight because he "can't put a price on [his] piece of mind". Love him! So I actually got to end up spending a couple extra days with him and we watched DareDevil: Born Again and he went home 2 days later. </li>
                        <li> I worked remote the following 2 days - day 1 at my mom's and day 2 from my home. My mom really pampered me that day! I was just hanging out at the dining table working and she would come out and make me a snack without me even asking. Feels good to be cared for :)</li>
                        <li> I'm so mad at my apartment managers! They did end up sending a maintenance guy over to our apartment that day (saw him go in and out on the Ring camera), and then they never called to follow up with us, <em> which is why Keana had to call them to ask abou the chemical in the first place</em>. </li>
                        <li> While it wasn't a gas leak, I remain embarrassed that I can't tell the difference between a chemical smell and a gas smell. But, everyone I talked to said I did the right thing and that it's always better to be safe than sorry, because what if it really was a gas leak? Then what?</li>
                    </ul>
                </p>
            </div>
            </div>
        </div>
    )
}