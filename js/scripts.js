// Set variables for each of the books covers, titles and descriptions so they can be inserted without a ton of clutter in the jQuery functions //

//Classics Covers//
var greatExpectationsCover = ('<img src="img/classics/greatexpectations.jpeg" class="card-img img-responsive" alt="The cover of great expectations">')
var illiadCover = ('<img src="img/classics/iliad.jpeg" class="card-img img-responsive" alt="The cover of the Iliad">')
var janeEyreCover = ('<img src="img/classics/janeeyre.jpeg" class="card-img img-responsive" alt="The cover of Jane Eyre">')
var mrsDallowayCover = ('<img src="img/classics/mrsdalloway.jpeg" class="card-img img-responsive" alt="The cover of Mrs. Dalloway">')
var scarletLetterCover = ('<img src="img/classics/scarletletter.jpeg" class="card-img img-responsive" alt="The cover of The Scarlet Letter">')
//Fantasy Covers//
var assassinCover = ('<img src="img/fantasy/assassinsapprentice.jpeg" class="card-img img-responsive" alt="The cover of The Assassins Apprentice">')
var earthseaCover = ('<img src="img/fantasy/earthsea.jpeg" class="card-img img-responive" alt="The cover of A Wizard of Earthsea">')
var faerieQueeneCover = ('<img src="img/fantasy/faeriequeene.jpeg" class="card-img img-responsive" alt="The title page of The Faerie Queene">')
var lotrCover = ('<img src="img/fantasy/lotr.jpeg" class="card-img img-responsive" alt="The cover of the Lord of the Rings">')
var mistbornCover = ('<img src="img/fantasy/mistborn.jpeg" class="card-img img-responsive" alt="The cover of Mistborn">')
//Literary Covers//
var asiLayDyingCover = ('<img src="img/literary/asilaydying.jpeg" class="card-img img-responsive" alt="The cover of As I Lay Dying">')
var inherentViceCover = ('<img src="img/literary/inherentvice.jpeg" class="card-img img-responsive" alt="The cover of Inherent Vice">')
var infiniteJestCover = ('<img src="img/literary/infinitejest.jpeg" class="card-img img-responsive" alt="The cover of Infinite Jest">')
var killaMockingBirdCover = ('<img src="img/literary/killamockingbird.jpeg" class="card-img img-responsive" alt="The cover of To Kill a Mockingbird">')
var oldManCover = ('<img src="img/literary/oldman.jpeg" class="card-img img-responsive" alt="The cover of The Old Man and the Sea">')
//Mystery Covers//
var farewellMyLovelyCover = ('<img src="img/mystery/farewellmylovely.jpeg" class="card-img img-responsive" alt="The cover of Farewell My Lovely">')
var dragonTattooCover = ('<img src="img/mystery/girlwiththedragontattoo.jpg" class="card-img img-responsive" alt="The cover of The Girl with the Dragon Tattoo">')
var harryPotterCover = ('<img src="img/mystery/harrypotter.jpeg" class="card-img img-responsive" alt="The cover of Harry Potter and the Sorcerors Stone">')
var houndOfBaskervillesCover = ('<img src="img/mystery/houndofbaskervilles.jpeg" class="card-img img-responsive" alt="The cover of the Hound of Baskervilles">')
var nameOfTheRoseCover = ('<img src="img/mystery/nameoftherose.jpeg" class="card-img img-responsive" alt="The cover of The Name of the Rose">')
//Thriller Covers//
var andThenNoneCover = ('<img src="img/thriller/andthentherewerenone.jpeg" class="card-img img-responsive" alt="The cover of And Then There Were None">')
var cobabCover = ('<img src="img/thriller/cobab.jpeg" class="card-img img-responsive" alt="The cover of Children of Blood and Bone">')
var davinciCodeCover = ('<img src="img/thriller/davincicode.jpeg" class="card-img img-responsive" alt="The cover of The Da Vinci Code">')
//Don't forget dragon tattoo is also a thriller//
var theStandCover = ('<img src="img/thriller/thestand.jpeg" class="card-img img-responsive" alt="The cover of The Stand">')
//Classics Titles//
var greatExpectationsTitle = ('<h3><a href=""><a href="https://amzn.to/2PGj18X">Great Expectations<br><small>Charles Dickens</small></a></h3>')
var iliadTitle = ('<h3><a href="https://amzn.to/2MBkhIB">The Iliad<br><small>Homer</small></a></h3>')
var janeEyreTitle = ('<h3><a href=https://amzn.to/2pgNVK2"">Jane Eyre<br><small>Charlotte Bronte</small></a></h3>')
var mrsDallowayTitle = ('<h3><a href="https://amzn.to/2pf0u8t">Mrs. Dalloway<br><small>Virginia Woolf</small></a></h3>')
var scarlettLetterTitle = ('<h3><a href="https://amzn.to/2MBkz29">The Scarlet Letter<br><small>Nathaniel Hawthorne</small></a></h3>')
//Fantasy Titles//
var assassinTitle = ('<h3><a href="https://amzn.to/2xhVGDB">The Assassin(&apos;ex1&apos;)s Apprentice<br><small>Robin Hood</small></a></h3>')
var eartheseaTitle = ('<h3><a href="https://amzn.to/2xug3g6">A Wizard of Earthsea<br><small>Ursula K. Le Guin</small></a></h3>')
var faerieQueeneTitle =('<h3><a href="https://amzn.to/2Ozu5Ez">The Faerie Queene<br><small>Edmund Spenser</small></a></h3>')
var lotrTitle = ('<h3><a href="https://amzn.to/2QCZ5VK">The Lord of the Rings<br><small>J.R.R. Tolkien</small></a></h3>')
var mistbornTitle = ('<h3><a href="https://amzn.to/2NhuEXc">Mistborn<br><small>Brandon Sanderson</small></a></h3>')
//Literary Titles//
var asiLayDyingTitle = ('<h3><a href="https://amzn.to/2D4DcvH">As I lay Dying<br><small>William Faulkner</small></a></h3>')
var inherentViceTitle = ('<h3><a href="https://amzn.to/2xpBeQL">Inherent Vice<br><small>Thomas Pynchon</small></a></h3>')
var infiniteJestTitle = ('<h3><a href="https://amzn.to/2Ov1xMw">Infinite Jest<br><small>David Foster Wallace</small></a></h3>')
var killaMockingBirdTitle = ('<h3><a href="https://amzn.to/2D7e3AD">To Kill a Mockingbird<br><small>Harper Lee</small></a></h3>')
var oldManTitle = ('<h3><a href="https://amzn.to/2D5x5HI">The Old Man and the Sea<br><small>Ernest Hemingway</small></a></h3>')
//Mystery Titles//
var farewellMyLovelyTitle = ('<h3><a href="https://amzn.to/2NR8k68">Farewell My Lovely<br><small>Raymond Chandler</small></a></h3>')
var dragonTattooTitle = ('<h3><a href="https://amzn.to/2MGa25S">The Girl with the Dragon Tattoo<br><small>Stieg Larsson</small></a></h3>')
var harryPotterTitle = ('<h3><a href="https://amzn.to/2NjH1Sp">Harry Potter and the Sorceror(&apos;ex1&apos;)s Stone<br><small>J.K. Rowling</small></a></h3>')
var houndOfBaskervillesTitle = ('<h3><a href="https://amzn.to/2xiakea">The Hound of Baskervilles<br><small>Arthur Conan Doyle</small></a></h3>')
var nameOfTheRoseTitle = ('<h3><a href="https://amzn.to/2D33H4Y">The Name of the Rose<br><small>Umberto Eco</small></a></h3>')
//Thriller Titles
var andThenNoneTitle = ('<h3><a href="https://amzn.to/2QE7QPf">And Then There Were None<br><small>Agatha Christie</small></a></h3>')
var cobabTitle = ('<h3><a href="https://amzn.to/2QCZtDG">Children of Blood and Bone<br><small>Tomi Adeyemi</small></a></h3>')
var davinciCodeTitle = ('<h3><a href="https://amzn.to/2PF1M82">The Da Vinci Code<br><small>Dan Brown</small></a></h3>')
var theStandTitle = ('<h3><a href="https://amzn.to/2MGh4HC">The Stand<br><small>Stephen King</small></a></h3>')
//Classics descriptions
var greatExpectationsDes = ('<p>Philip Pirrip, nicknamed Pip, an orphan and the protagonist and narrator of Great Expectations. In his childhood, Pip dreamed of becoming a blacksmith like his kind brother-in-law, Joe Gargery. At Satis House, about age 8, he meets and falls in love with Estella, and tells Biddy that he wants to become a gentleman.</p>')
var iliadDes = ('<p>Set during the Trojan War, the ten-year siege of the city of Troy (Ilium) by a coalition of Greek states, it tells of the battles and events during the weeks of a quarrel between King Agamemnon and the warrior Achilles.</p>')
var janeEyreDes = ('<p>Primarily a bildungsroman, Jane Eyre follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall. The novel revolutionized prose fiction in that the focus on Janes moral and spiritual development is told through an intimate, first-person narrative, where actions and events are coloured by a psychological intensity.</p>')
var mrsDallowayDes = ('<p>A novel by Virginia Woolf that details a day in the life of Clarissa Dalloway, a fictional high-society woman in post–First World War England.</p>')
var scarletLetterDes = ('<p>Set in 17th-century Puritan Massachusetts Bay Colony, during the years 1642 to 1649, it tells the story of Hester Prynne, who conceives a daughter through an affair and struggles to create a new life of repentance and dignity. As she struggles to raise her rambunctious daughter, Pearl, on her own, the father of her unborn child is revealed and is shown to be experiencing severe guilt. Through the scorn and judgment of the citizens and Roger Chillingworth (Hester husband), the two decide to remain together. Throughout the book, Hawthorne explores themes of legalism, sin, and guilt.</p>')
//Fantasy descriptions
var assassinDes = ("<p>Young Fitz is the bastard son of the noble Prince Chivalry, raised in the shadow of the royal court by his father’s gruff stableman. He is treated as an outcast by all the royalty except the devious King Shrewd, who has him secretly tutored in the arts of the assassin. For in Fitz’s blood runs the magic Skill—and the darker knowledge of a child raised with the stable hounds and rejected by his family.</p>")
var earthseaDes = ("<p>Originally published in 1968, Ursula K. Le Guin’s A Wizard of Earthsea marks the first of the six now beloved Earthsea titles. Ged was the greatest sorcerer in Earthsea, but in his youth he was the reckless Sparrowhawk. In his hunger for power and knowledge, he tampered with long-held secrets and loosed a terrible shadow upon the world. This is the tumultuous tale of his testing, how he mastered the mighty words of power, tamed an ancient dragon, and crossed death's threshold to restore the balance.</p>")
var faerieQueeneDes = ("<p>A marvelous epic poem depicting the virtues of the legendary King Arthur and his knights in a mythical place called Faerieland. Spenser based his interpretation of the virtues on those named by Aristotle and Thomas Aquinas. Each one of the seven books discusses a different hero who displays one of these virtues; however, this entire collection was meant to be a tribute to Queen Elizabeth and the Tudor family. The stories are intricate and sometimes hard to understand. The language follows Spenserian prose and is intentionally archaic; Spenser wanted his work to have a mythical feel rather than being a modern piece. Each work was specifically chosen to evoke a certain feeling or image, allowing Spenser to make the world of Faerieland have an enchanting feeling. All readers who make their way through the text find that they are rewarded by the epic poem's masterful plots and inventive setting.</p>")
var lotrDes = ("<p>Sauron, the Dark Lord, has gathered to him all the Rings of Power – the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring – the ring that rules them all – which has fallen into the hands of the hobbit, Bilbo Baggins.</p><p>In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.</p>")
var mistbornDes = ("<p>For a thousand years the ash fell and no flowers bloomed.</p><p>For a thousand years the Skaa slaved in misery and lived in fear while the Lord Ruler reigned with absolute power and ultimate terror, a divinely invincible leader. Hope is long lost, until a terribly scarred, heart-broken half-Skaa in the depths of the most hellish prison and discovered he has the powers of a Mistborn. A brilliant thief and natural leader, Kelsier will turn his talents to the ultimate caper: one with the Lord Ruler himself as the mark. </p>")
//Literary descriptions
var asiLayDyingDes = ("<p>As I Lay Dying is Faulkner’s harrowing account of the Bundren family’s odyssey across the Mississippi countryside to bury Addie, their wife and mother. Narrated in turn  by each of the family members—including Addie herself—as well as others the novel ranges in mood, from dark comedy to the deepest pathos. Considered one of the most influential novels in American fiction in structure, style, and drama, As I Lay Dying is a true 20th-century classic. </p>")
var inherentViceDes = ("<p>In this lively yarn, Thomas Pynchon, working in an unaccustomed genre that is at once exciting and accessible, provides a classic illustration of the principle that if you can remember the sixties, you weren't there.</p><p>It's been a while since Doc Sportello has seen his ex- girlfriend. Suddenly she shows up with a story about a plot to kidnap a billionaire land developer whom she just happens to be in love with.</p>")
var infiniteJestDes = ("<p>A gargantuan, mind-altering comedy about the Pursuit of Happiness in America set in an addicts' halfway house and a tennis academy, and featuring the most endearingly screwed-up family to come along in recent fiction, Infinite Jest explores essential questions about what entertainment is and why it has come to so dominate our lives; about how our desire for entertainment affects our need to connect with other people; and about what the pleasures we choose say about who we are. Equal parts philosophical quest and screwball comedy, Infinite Jest bends every rule of fiction without sacrificing for a moment its own entertainment value. It is an exuberant, uniquely American exploration of the passions that make us human - and one of those rare books that renew the idea of what a novel can do.</p>")
var killaMockingBirdDes = ("<p>Shoot all the bluejays you want, if you can hit 'em, but remember it's a sin to kill a mockingbird.</p><p>'Voted the most life changing book by a female author.</p><p>A lawyer's advice to his children as he defends the real mockingbird of Harper Lee's classic novel - a black man charged with the rape of a white girl. Through the young eyes of Scout and Jem Finch, Harper </p>")
var oldManDes = ("<p>The Old Man and the Sea was written in 1951 in Cuba, and published in 1952. It was the last major work of fiction to be produced by Hemingway and published in his lifetime. One of his most famous works, it centres upon Santiago, an ageing fisherman who struggles with a giant marlin far out in the Gulf Stream. The Old Man and the Sea was awarded the Pulitzer Prize for Fiction in 1953 and was cited by the Nobel Committee as contributing to the awarding of the Nobel Prize in Literature to Hemingway in 1954.</p>")
//Mystery descriptions
var farewellMyLovelyDes = ("<p>Philip Marlowe's about to give up on a completely routine case when he finds himself in the wrong place at the right time to get caught up in a murder that leads to a ring of jewel thieves, another murder, a fortune-teller, a couple more murders, and more corruption than your average graveyard.</p>")
var dragonTattooDes = ("<p>Harriet Vanger, a scion of one of Sweden's wealthiest families disappeared over forty years ago. All these years later, her aged uncle continues to seek the truth. He hires Mikael Blomkvist, a crusading journalist recently trapped by a libel conviction, to investigate. He is aided by the pierced and tattooed punk prodigy Lisbeth Salander. Together they tap into a vein of unfathomable iniquity and astonishing corruption.</p>")
var harryPotterDes = ("<p>Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!</p>")
var houndOfBaskervillesDes = ("<p>The Hound of the Baskervilles is the third of the four crime novels written by Sir Arthur Conan Doyle featuring the detective Sherlock Holmes. Originally serialised in The Strand Magazine from August 1901 to April 1902, it is set largely on Dartmoor in Devon in England's West Country and tells the story of an attempted murder inspired by the legend of a fearsome, diabolical hound of supernatural origin. Sherlock Holmes and his companion Dr. Watson investigate the case. This was the first appearance of Holmes since his intended death in 'The Final Problem', and the success of The Hound of the Baskervilles led to the character's eventual revival.</p>")
var nameOfTheRoseDes = ("<p>The year is 1327. Franciscans in a wealthy Italian abbey are suspected of heresy, and Brother William of Baskerville arrives to investigate. When his delicate mission is suddenly overshadowed by seven bizarre deaths, Brother William turns detective. His tools are the logic of Aristotle, the theology of Aquinas, the empirical insights of Roger Bacon—all sharpened to a glistening edge by wry humor and a ferocious curiosity. He collects evidence, deciphers secret symbols and coded manuscripts, and digs into the eerie labyrinth of the abbey, where /“the most interesting things happen at night./”</p>")
//Thriller descriptions
var andThenNoneDes = ("<p>Ten strangers, apparently with little in common, are lured to an island mansion off the coast of Devon by the mysterious U.N.Owen. Over dinner, a record begins to play, and the voice of an unseen host accuses each person of hiding a guilty secret. That evening, former reckless driver Tony Marston is found murdered by a deadly dose of cyanide.</p>")
var cobabDes = ("<p>They killed my mother.</p><p>They took our magic.</p><p>They tried to bury us.</p><p>Now we rise.</p>")
var davinciCodeDes = ("<p>Simultaneously lightning-paced, intelligent, and intricately layered with remarkable research and detail, Dan Brown's novel is a thrilling masterpiece—from its opening pages to its stunning conclusion.</p>")
var theStandDes = ("<p>And here is the bleak new world of the day after: a world stripped of its institutions and emptied of 99 percent of its people. A world in which a handful of panicky survivors choose sides -- or are chosen. A world in which good rides on the frail shoulders of the 108-year-old Mother Abigail -- and the worst nightmares of evil are embodied in a man with a lethal smile and unspeakable powers: Randall Flagg, the dark man.</p>")
//


$(document).ready(function(){
  $('h3#dropQuiz').click(function(){
    $('form#userInput').slideToggle('slow', function(){
    });
  });
  $('form#userInput').submit(function(event){
    event.preventDefault();
    var genre = $('#genre').val();
    var action = $("input:radio[name=action]:checked").val();
    var age = $("input:radio[name=age]:checked").val();
    var authorEra = $("input:radio[name=authorera]:checked").val();
    var proseStyle = $("input:radio[name=prosestyle]:checked").val();
    var authorGender = $("input:radio[name=authorGender]:checked").val();
    var userName = $("input#userName").val();
    var userFavDay = $("#favDay").val();
    $('#name').empty().text(userName);


    if (genre === "classic" && action === "exciting" && authorEra === "modern" && authorGender === "male") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(greatExpectationsCover);
      $('div#resultTitle').empty().append(greatExpectationsTitle);
      $('div#bookDescription').empty().append(greatExpectationsDes);
      $('div.no-show').slideDown();
    } else if (genre === "classic" && authorEra === "anyEra" && authorGender === "female") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(janeEyreCover);
      $('div#resultTitle').empty().append(janeEyreTitle);
      $('div#bookDescription').empty().append(janeEyreDes);
      $('div.no-show').slideDown();
    } else if (genre === "classic" && authorEra === "modern" && authorGender === "female") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(mrsDallowayCover);
      $('div#resultTitle').empty().append(mrsDallowayTitle);
      $('div#bookDescription').empty().append(mrsDallowayDes);
      $('div.no-show').slideDown();
    } else if (genre === "classic" && action === "exciting" && authorEra === "anyEra" && authorGender === "male") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(illiadCover);
      $('div#resultTitle').empty().append(iliadTitle);
      $('div#bookDescription').empty().append(iliadDes);
      $('div.no-show').slideDown();
    } else if (genre === "classic" && action === "notExciting" && authorGender === "male"){
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(scarletLetterCover);
      $('div#resultTitle').empty().append(scarlettLetterTitle);
      $('div#bookDescription').empty().append(scarletLetterDes);
      $('div.no-show').slideDown();
    } else if (genre === "fantasy" && authorGender === "female"){
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(earthseaCover);
      $('div#resultTitle').empty().append(eartheseaTitle);
      $('div#bookDescription').empty().append(earthseaDes);
      $('div.no-show').slideDown();
    } else if (genre === "fantasy" && authorGender === "male" && action === "notExciting" && authorEra === "anyEra") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(faerieQueeneCover);
      $('div#resultTitle').empty().append(faerieQueeneTitle);
      $('div#bookDescription').empty().append(faerieQueeneDes);
      $('div.no-show').slideDown();
    } else if (genre === "fantasy" && authorGender === "male" && age === "noYA") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(lotrCover);
      $('div#resultTitle').empty().append(lotrTitle);
      $('div#bookDescription').empty().append(lotrDes);
      $('div.no-show').slideDown();
    } else if (genre === "fantasy" && authorGender === "male" && action === "notExciting" && authorEra === "modern" && proseStyle === "proseImportant") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(assassinCover);
      $('div#resultTitle').empty().append(assassinTitle);
      $('div#bookDescription').empty().append(assassinDes);
      $('div.no-show').slideDown();
    } else if (genre === "fantasy" && authorGender === "male" && action === "exciting" && age === "YAOkay") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(mistbornCover);
      $('div#resultTitle').empty().append(mistbornTitle);
      $('div#bookDescription').empty().append(mistbornDes);
      $('div.no-show').slideDown();
    } else if (genre === "literary" && authorGender === "female" && age === "YAOkay") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(killaMockingBirdCover);
      $('div#resultTitle').empty().append(killaMockingBirdTitle);
      $('div#bookDescription').empty().append(killaMockingBirdDes);
      $('div.no-show').slideDown();
    } else if (genre === "literary" && authorGender === "female" && age === "noYA") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(mrsDallowayCover);
      $('div#resultTitle').empty().append(mrsDallowayTitle);
      $('div#bookDescription').empty().append(mrsDallowayDes);
      $('div.no-show').slideDown();
    } else if (genre === "literary" && authorGender === "male" && proseStyle === "proseImportant" && authorEra === "modern") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(oldManCover);
      $('div#resultTitle').empty().append(oldManTitle);
      $('div#bookDescription').empty().append(oldManDes);
      $('div.no-show').slideDown();
    } else if (genre === "literary" && authorGender === "male" && proseStyle === "proseUnimportant" && authorEra === "anyEra") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(asiLayDyingCover);
      $('div#resultTitle').empty().append(asiLayDyingTitle);
      $('div#bookDescription').empty().append(asiLayDyingDes);
      $('div.no-show').slideDown();
    } else if (genre === "literary" && authorGender === "male" && proseStyle ==="proseImportant" && authorEra === "modern") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(inherentViceCover);
      $('div#resultTitle').empty().append(inherentViceTitle);
      $('div#bookDescription').empty().append(inherentViceDes);
      $('div.no-show').slideDown();
    } else if (genre === "literary" && authorGender === "male" && proseStyle === "proseUnimportant" && authorEra === "modern") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(infiniteJestCover);
      $('div#resultTitle').empty().append(infiniteJestTitle);
      $('div#bookDescription').empty().append(infiniteJestDes);
      $('div.no-show').slideDown();
    } else if (genre === "mystery" && authorGender === "female" && authorEra === "modern") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(harryPotterCover);
      $('div#resultTitle').empty().append(harryPotterTitle);
      $('div#bookDescription').empty().append(harryPotterDes);
      $('div.no-show').slideDown();
    } else if (genre === "mystery" && authorGender === "female" && authorEra === "anyEra") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(andThenNoneCover);
      $('div#resultTitle').empty().append(andThenNoneTitle);
      $('div#bookDescription').empty().append(andThenNoneDes);
      $('div.no-show').slideDown();
    } else if (genre === "mystery" && authorGender === "male" && proseStyle === "proseUnimportant" && authorEra === "anyEra") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(houndOfBaskervillesCover);
      $('div#resultTitle').empty().append(houndOfBaskervillesTitle);
      $('div#bookDescription').empty().append(houndOfBaskervillesDes);
      $('div.no-show').slideDown();
    } else if (genre === "mystery" && authorGender === "male" && action === "notExciting" && authorEra === "modern") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(nameOfTheRoseCover);
      $('div#resultTitle').empty().append(nameOfTheRoseTitle);
      $('div#bookDescription').empty().append(nameOfTheRoseDes);
      $('div.no-show').slideDown();
    } else if (genre === "mystery" && authorGender === "male" && action === "exciting" && authorEra === "modern") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(dragonTattooCover);
      $('div#resultTitle').empty().append(dragonTattooTitle);
      $('div#bookDescription').empty().append(dragonTattooDes);
      $('div.no-show').slideDown();
    } else if (genre === "mystery" && authorGender === "male" && proseStyle === proseImportant) {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(farewellMyLovelyCover);
      $('div#resultTitle').empty().append(farewellMyLovelyTitle);
      $('div#bookDescription').empty().append(farewellMyLovelyDes);
      $('div.no-show').slideDown();
    } else if (genre === "thriller" && authorGender === "female" && authorEra === "modern") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(cobabCover);
      $('div#resultTitle').empty().append(cobabTitle);
      $('div#bookDescription').empty().append(cobabDes);
      $('div.no-show').slideDown();
    } else if (genre === "thriller" && authorGender === "female" && authorEra === "anyEra") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(andThenNoneCover);
      $('div#resultTitle').empty().append(andThenNoneTitle);
      $('div#bookDescription').empty().append(andThenNoneDes);
      $('div.no-show').slideDown();
    } else if (genre === "thriller" && authorGender === "male" && authorEra === "modern" && proseStyle === "proseUnimportant") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(davinciCodeCover);
      $('div#resultTitle').empty().append(davinciCodeTitle);
      $('div#bookDescription').empty().append(davinciCodeDes);
      $('div.no-show').slideDown();
    } else if (genre === "thriller" && authorGender === "male" && age === "YAOkay") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(dragonTattooCover);
      $('div#resultTitle').empty().append(dragonTattooTitle);
      $('div#bookDescription').empty().append(dragonTattooDes);
      $('div.no-show').slideDown();
    } else if (genre === "thriller" && authorGender === "male" && age== "noYA") {
      $('div.no-show').slideUp();
      $('div#resultImg').empty().append(theStandCover);
      $('div#resultTitle').empty().append(theStandTitle);
      $('div#bookDescription').empty().append(theStandDes);
      $('div.no-show').slideDown();
    }
  });
});
