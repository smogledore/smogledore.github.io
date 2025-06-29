---
title: "Improve the large meeting experience with better camera layouts"
subtitle: "Product: GoTo Meeting Web & Desktop"
date: 2022-01-22
draft: false
product: "GoTo Meeting"
thumbnail: "/img/meeting-grid/meeting-grid-thumbnail.png"
---

<img src="/img/meeting-grid/meeting-grid-thumbnail-3x.png" class="sm-img mb-6" alt="Meeting Grid">

<section>

<div class="row">

<div class="col-12 col-lg-7">

## Problem statement

A key point in GoTo's recent business strategy was to unify its complex portfolio of multiple native applications into a single product and, like many other tech companies, transition to a framework based on web technologies called Electron. Thus, the entire codebase had to be reworked, including the interface implementation of GoTo Meeting, an online videoconferencing application that hosts 80+ million annual online meetings.  

The core of the meeting experience is the camera layout, also called “Meeting Grid”. With a global shift to remote work since the beginning of the pandemic, online meetings are no longer limited to collaborative sessions between a few people but can also extend to several use cases and now accommodate more participants, as during company-wide gatherings for example.  
 
Rebuilding the Meeting Grid was an opportunity to fix known issues and create a solid foundation that could scale for large meetings on the web and desktop versions of GoTo Meeting.

</div>

<div class="col-md-1">&nbsp;</div>

<div class="col-12 col-lg-4 d-flex align-items-center">

<div class="sm-card">

<p class="sm-card-title">My role</p>

I was in charge of the entire design process for this initiative, including user testing in collaboration with a UX researcher and close teamwork with the engineering team.    

<p class="m-0">I was also in contact with UX designers from the Events team, as the Meeting Grid was also intended to be used for webinars and training as part of the unification effort.</p>

</div>

</div>

</div>

</section>

<section>

## Discovery

As a first step to understand the scope and identify potential improvements, I searched for existing insights about the Meeting Grid.  
 
Pain points and known issues had already been collected by UX Research, including problems specific to large meetings, regarding participants visibility: during a presentation, the interface is split to display shared content while keeping the audience visible in a smaller space, making cameras too small to see participants and find the current speaker in the audience, especially for visually impaired users. Additionally, displaying initials for inactive cameras can be confusing for large meetings as multiple participants may have the same initials, and in some cases there is wasted space around the grid that could be used to display larger tiles.  
 
It was important to know the current behavior of the Meeting Grid, for this I studied the different layout possibilities that can vary depending on the selected view, the number of participants and the size of the window. Engineers from the team also shared metrics with me about the screen resolutions of our users, which was helpful when designing the MVP.

<img src="/img/meeting-grid/discovery-board.png" class="sm-img mt-4" alt="Discovery board about the Meeting Grid">

<p class="sm-caption">Discovery board about the Meeting Grid</p>

<img src="/img/meeting-grid/discovery-current-layouts.png" class="sm-img mt-4" alt="Current Meeting Grid behavior">

<p class="sm-caption">Current Meeting Grid behavior</p>

</section>

<section>

## Ideation

With the insights learned from the discovery phase, I started thinking about different solutions to maintain an acceptable size of camera while having all participants easily accessible.  
 
Regarding the layout, pagination or scrolling seemed to be simple options to bring into the product, compared to less common ideas such as having an open canvas or a less strict space in which participants could move. I also explored possibilities for certain characteristics of the Meeting Grid, like its responsiveness, the visibility of the current speaker and how to make non-visible tiles appear on screen… Regarding camera tiles, there were serval ways to handle different aspect ratios and optimize the display of a feed in its container, such as cropping or using a fluid size for the tiles.  
 
In parallel, the engineering team initiated the development of a Proof-Of-Concept, to exchange more quickly on the considered concepts and adjust design choices based on technical limitations.

<img src="/img/meeting-grid/ideation.png" class="sm-img mt-4" alt="Ideation board">

<p class="sm-caption">Ideation board</p>

</section>

<section>

## Building an MVP

<div class="row mb-4">

<div class="col-12 col-lg-7">

The purpose of this MVP was to create the key building blocks of the new Meeting Grid, a solid foundation that will help participants be more visible and feel more engaged in a meeting.  
 
After discussing the different options with the team, we decided to use a scrolling pattern for this first increment, as it was the solution to easily browse the audience with the highest impact and minimal effort.

</div>

<div class="col-1">&nbsp;</div>

<div class="col-12 col-lg-4 d-flex align-items-center">

<div class="sm-card mb-3 mb-lg-0">

<p class="sm-card-title">Jobs To Be Done</p>

#### When I’m in a meeting, I want to see the webcam of the participants correctly so that I can look at their reaction.

</div>

</div>

</div>

#### Delivery

<!-- Add text content here -->

<img src="/img/meeting-grid/mvp-specifications.png" class="sm-img mt-4" alt="MVP specifications">

<p class="sm-caption mb-3">MVP specifications</p>

<img src="/img/meeting-grid/mvp-mockups.png" class="sm-img mt-4" alt="Meeting Grid examples">

<p class="sm-caption mb-5">Meeting Grid examples</p>

</section>

<!--
## Research
 -->

<!-- Add text content here -->

<!--
<img src="/img/meeting-grid/X.png" class="sm-img mt-4" alt="Alt">

<p class="sm-caption mb-5">Caption</p>
 -->

## Refining the solution

Following the release of the MVP, we gathered user feedback and conducted additional research. As a result, we iterated on the design and introduced a paginated layout to replace the scrolling pattern.

<!--
<img src="/img/meeting-grid/X.png" class="sm-img mt-4" alt="Alt">

<p class="sm-caption mb-3">Caption</p>
 -->

<!--
#### Delivery
 -->

<!-- Add text content here -->

<img src="/img/meeting-grid/pagination-specifications.png" class="sm-img mt-4" alt="Pagination specifications">

<p class="sm-caption mb-3">Pagination specifications</p>

<img src="/img/meeting-grid/pagination-mockups.png" class="sm-img mt-4" alt="Alt">

<p class="sm-caption mb-3">Pagination in the meeting interface</p>

<img src="/img/meeting-grid/post-mvp-specifications.png" class="sm-img mt-4" alt="Alt">

<p class="sm-caption mb-3">"Who's talking" view specifications</p>

<img src="/img/meeting-grid/post-mvp-mockups.png" class="sm-img mt-4" alt="Alt">

<p class="sm-caption mb-5">Meeting grid examples</p>

</section>

<section>

## Outcome

The new paginated layout resulted in a 0.6-point increase in Customer Effort Score, indicating that users found it significantly easier to manage large meetings. Telemetry on the view switcher showed a 35% decrease in interactions, suggesting the layout now adapts more intuitively to user needs.

</section>