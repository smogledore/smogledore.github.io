---
title: "Replace an outdated product for faster delivery of new features"
subtitle: "Product: Caldera Jobs"
date: 2022-01-19
draft: false
product: "Caldera Jobs"
thumbnail: "/img/caldera-jobs/caldera-jobs-thumbnail.png"
---

<img src="/img/caldera-jobs/caldera-jobs-thumbnail-3x.png" class="sm-img mb-6" alt="Caldera Jobs">

<section>

<div class="row">

<div class="col-12 col-lg-7">

## Problem statement

The spooler is a part of CalderaRIP which provides customers with job queues, categorized by status, for each printer in the production environment.  
Having to sometimes manage thousands of jobs, its performance is reduced in this case to the detriment of the user experience. In addition, it is no longer scalable due to the aging of its technology, which slows innovation: implementing a new feature consumes considerable time, which is not realistic in the company’s strategy.

New features are however eagerly awaited by users: archiving/restoring jobs, searching and filtering jobs, customizing the interface and an improved way of displaying nests (a composition of several jobs grouped into one). This is why a new product is created, called CalderaJobs, initially in parallel with the existing spooler but with the aim of ultimately replacing it.

<img src="/img/caldera-jobs/spooler.png" class="sm-img mt-4" alt="Spooler">

<p class="sm-caption">Legacy version of the spooler that will be replaced with CalderaJobs</p>

</div>

<div class="col-md-1">&nbsp;</div>

<div class="col-12 col-lg-4">

<div class="sm-card">
    
<p class="sm-card-title">The user stories</p>

#### As a production manager, I want to be able to customize my dashboard interface to be more efficient in production control.

<br>

#### As a print operator, I want to quickly locate a job among all the printers, in order to optimize the processing time of a customer order.  

</div>

</div>

</div>

</section>

## Research and ideation
During the first stages of my work, I focused in particular on two needs that seemed similar to me: job search/filtering and interface customization. The goal in both cases was to have quick access to information, altering the default display.  

Therefore, I studied the option of being able to create custom views. To confirm this, I worked on the information architecture by listing which job parameters could define a view. After that, I found out that the display of nests could be treated in the same way, by assigning temporary filtering parameters to the current view.

<section>

<div class="row">

<div class="col-12 col-lg-6">

<img src="/img/caldera-jobs/information-architecture-1.jpg" class="sm-img mt-4" alt="Information architecture">

</div>

<div class="col-12 col-lg-6">

<img src="/img/caldera-jobs/information-architecture-2.jpg" class="sm-img mt-4" alt="Information architecture">

</div>

</div>

<p class="sm-caption">Information architecture</p>

<div class="row">

<div class="col-0 col-lg-3">&nbsp;</div>

<div class="col-12 col-lg-6">

<img src="/img/caldera-jobs/wireframe-1.jpg" class="sm-img mt-4" alt="Wireframe">

</div>

<div class="col-0 col-lg-3">&nbsp;</div>

</div>

<p class="sm-caption">Wireframes for job views</p>

</section>

## Building a MVP
In order to integrate into the Scrum framework, I moved on to the design of an MVP which could be the first iteration allowing to deliver the possibility of archiving and restoring jobs, this being the most urgent need because it can resolve issues encountered in the production of our customers.  

This MVP was implemented in parallel with the rest of the visual design work.

<section>

<div class="row">

<div class="col-0 col-lg-1">&nbsp;</div>

<div class="col-12 col-lg-5">

<img src="/img/caldera-jobs/mvp-wireframe.jpg" class="sm-img mt-4" alt="MVP wireframe">

<p class="sm-caption">MVP wireframe</p>

</div>

<div class="col-12 col-lg-5">

<img src="/img/caldera-jobs/mvp.png" class="sm-img mt-4" alt="Implemented MVP">

<p class="sm-caption">Implemented MVP</p>

</div>

<div class="col-0 col-lg-1">&nbsp;</div>

</div>

</section>

## Visual design
We wanted a simple and easy to use interface for this product so I iterated a few times on visual design, taking into account the feedback from my teammates.

<section>

<div class="row">

<div class="col-12 col-lg-6">

<img src="/img/caldera-jobs/exploration-1.png" class="sm-img mt-4" alt="Design exploration">

</div>

<div class="col-12 col-lg-6">

<img src="/img/caldera-jobs/exploration-4.png" class="sm-img mt-4" alt="Design exploration">

</div>

</div>

<div class="row">

<div class="col-0 col-lg-3">&nbsp;</div>

<div class="col-12 col-lg-6">

<img src="/img/caldera-jobs/exploration-3.png" class="sm-img mt-4" alt="Design exploration">

</div>

<div class="col-0 col-lg-3">&nbsp;</div>

</div>

<p class="sm-caption">Design explorations</p>

</section>

## Prototype
Starting from the high-fidelity mockup of the first screen, I prepared a few scenarios that were aligned with the user stories, and created a full prototype accordingly, in order to perform user testing sessions.

<section>

<div class="row">

<div class="col-12 col-lg-8">

<img src="/img/caldera-jobs/prototype.png" class="sm-img mt-4" alt="Screens of each prototype scenario">

<p class="sm-caption">Screens of each prototype scenario</p>

</div>

<div class="col-12 col-lg-4">

<img src="/img/caldera-jobs/scenario.jpg" class="sm-img mt-4" alt="Scenarios based on user stories">

<p class="sm-caption">Scenarios based on user stories</p>

</div>

</div>

</section>

## User testing
I initiated the first user testing sessions within the company in order to obtain feedback before the development of the envisaged solution.
 
Previously, tests were generally carried out on a release candidate by beta testers only. Testing a prototype with concrete scenarios allows to get feedback earlier in the delivery process, which saves considerable time. Each of the 5 sessions was screen-recorded, which enabled me to come back to it later and make changes accordingly thanks to the relevant comments gathered.

<section>

<div class="row">

<div class="col-12 col-lg-6">

<img src="/img/caldera-jobs/testing-1.jpg" class="sm-img mt-4" alt="User testing">

</div>

<div class="col-12 col-lg-6">

<img src="/img/caldera-jobs/testing-2.jpg" class="sm-img mt-4" alt="User testing">

</div>

</div>

<p class="sm-caption">Preparation for testing sessions</p>

</section>

## Improving the solution
Based on the feedback received from user tests, I made some modifications to the mockups before delivering them for development.

This mainly concerned the panels and filters part, which had to be treated more simply, and the behavior of the nests to be adjusted. Also, printers have been separated from custom lists, because the users were always refering to the existing spooler.

<section>

<div class="row">

<div class="col-12">

<img src="/img/caldera-jobs/CalderaJobs.png" class="sm-img mt-4" alt="Final design">

</div>

</div>

<p class="sm-caption">Final design</p>

</section>

## Outcome
CalderaJobs received an excellent feedback from customers, some of them already using it daily instead of CalderaRIP. Some parts still need to be planned for implementation, and new feature requirements have been added to the product backlog, like the possibility of moving a job to another printer or reprinting an old job.