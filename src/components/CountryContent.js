import React from 'react';

const countries = [
  {
    title: 'nl',
    name: 'Netherlands',
    content: [
      <p key="1">
        The Netherlands is where I was born and where I currently reside again after having spent years abroad.
      </p>,
      <p key="2">
        I was born with a severe hearing impairment and therefore rely a lot on speech reading.
        In 2015, however, I was fitted with a cochlair implant, which provides far more auditory support compared to normal hearing aids.
        Being able to hear what my son is talking about in the back of the car, for example, is a huge blessing.
      </p>,
      <p key="3">
        Even though there was this stigma on the hearing impaired in my youth,
        there were several persons who sensed I was able to do a bit more than expected.
        Thanks to them I was able to pursue my dream and graduate from university.
        Once I had my Master's Degree, I wanted to continue my studies, but could not find a way to do so in the Netherlands.
        This was, however, a blessing as it provided me with an opportunity to venture abroad.
      </p>,
      <p key="4">
        Almost two decades later I returned again when I was offered to work for <a href="https://www.sanoma.com">Sanoma</a>.
        After 5 great years at Sanoma, working on comparison websites, data warehouses and iOS apps,
        I was asked to join <a href="https://zorgdomein.nl/">ZorgDomein</a>,
        a leading company on providing smart digital solutions to facilitate communication
        between health care providers. And I did. Since May 2016, I am a senior software engineer and team lead,
        working on a variety of projects. The challenging nature of work and the
        excellent atmosphere among colleagues makes this an enjoyable venture.
      </p>
    ]
  },
  {
    title: 'uk',
    name: 'England',
    content: [
      <p key="1">
        While studying for my Master's in the Netherlands, I once contacted Stevan Harnad
        to enquire about some of his work. We kept in contact and after my graduation he
        provided me with an opportunity to do a PhD under his tutelage at Southampton
        University. It was my first time living abroad and I had four enjoyable years in Southampton.
        I obviously learned a lot, but among other things, I also played basketball on the university team,
        owned my first car (which was so old the floor would actually turn blank during rain),
        tore my ACL ligaments during a friendly football match (admittedly not the enjoyable part of my stay...),
        went to professional football matches, attended a live Einstürzende Neubauten concert in London, and
        did a good amount of sightseeing.
      </p>,
      <p key="2">
        Although England is not really far from the Netherlands, it does have a sufficiently
        different culture for me to expand my world view, learn to open my mind,
        and to realize how things can be done in other ways. I'm of the opinion that
        everyone should try to live abroad for a period of time, if possible. Being a tourist
        is completely different from actually living and working or studying in another country.
      </p>
    ]
  },
  {
    title: 'us',
    name: 'USA',
    content: [
      <p key="1">
        After I received my PhD from Southampton University in 1998, I moved to the United States
        to do a postdoctoral fellowship at the <a href="http://www.gluck.edu/index.html">Gluck Lab</a>,
        Rutger's University in Newark, New Jersey.
        During my time there, I lived in Hoboken, NJ, a lovely little town across the Hudson from Manhattan.
        Being in an area with so many different ethnicities was a great and eye-opening experience. I learned
        a lot in those few years and got to know quite a few good people. obviously, New York City is a
        special place itself, with so much to see and do. It's true that it's a city that does not sleep.
      </p>,
      <p key="2">
        During my time in the States, the dot-com business was growing eagerly. I quit my postdoctoral to
        work for a startup called <a href="http://www.trademarkia.com/nano-insight-on-site-76002589.html">Nano by WS Hold</a>.
        It was a fun and good experience to work for a startup in Manhattan, but the dot-com bubble soon burst, so I
        started to look for other opportunities. And that brought be to a completely different country.
      </p>
    ]
  },
  {
    title: 'ja',
    name: 'Japan',
    content: [
      <p key="1">
        With the dot-com bubble bursting in the States, I went and applied for a postdoctoral in Japan.
        About a month later, January 2001, I found myself in Tsukuba. My research was focused on categorization
        of sequential information with artificial neural networks and took place at <a href="http://www.aist.go.jp/index_en.html">AIST</a>.
      </p>,
      <p key="2">
        This country felt like home right away. I met my wonderful wife soon after, got married and
        have a just as wonderful daughter and son. My academic attention span was pressured again,
        however, with the growth of the blogosphere. I started blogging and even wrote a desktop client
        to facilitate my blogging workflow. This app, with the silly name of Kung-Log,
        became widely popular to my surprise. It even attracted attention from <a href="http://joi.ito.com/">Joichi Ito</a>.
        We stayed in contact and when I felt it was not the time to be in academics, Joi offered me a job.
        I rewrote Kung-Log into ecto, produced more software and did a range of consulting jobs for clients,
        such as Six Apart and Technorati.
      </p>,
      <p key="3">
        I then followed Joi to Digital Garage and became a Senior Technology Manager.
        I was part of the Technorati Japan team and was involved in various Twitter-related projects,
        not the least of which was the now defunct Tappit iPhone app (with a Hello Kitty variant).
        Although I had a great time in Japan, I chose to relocate back to the Netherlands
        with my wife and kids to work for Sanoma. That was in 2011 and I have been in the Netherlands since.
      </p>
    ]
  }
]

export default countries;
