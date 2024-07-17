---
layout: types.njk
permalink: types.html
---

## About Learning Types

Understanding the various Types of Learning allows the conversation and thinking about about the process and practice of teaching and instruction to become more student centred. 

{%- for item in types -%}
<section class="{{ item.learningType | lower }}">
    <h2>{{ item.learningType | capitalize }} Learning</h2>
    <p class="description">{{ item.description }}</p>
    <ul class="details"> 
      <li><span>Activity </span> {{ item.activityType }}</li>
      <li><span>Verb </span> {{ item.verb }}</li>
    </ul>
    <p class="blurb">{{ item.blurb }}</p>
</section>

{%- endfor -%}