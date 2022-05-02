---
template: BlogPost
path: /blog/icip-challenge-2022
date: 2022-05-02T07:08:53.137Z
title: ICIP 2022 - Parasitic Egg Detection and Classification
thumbnail: "/assets/blogs/icip-2022.png"
metaDescription: Our lab participate in ICIP challenge 2022, Parasitic egg detection and classification in microscopic images
---

Parasitic infections are one of the leading causes of death and other ailments worldwide. Detecting such infections using traditional
diagnostic procedures requires experienced medical technologists together with a significant amount of time and effort.
An automated procedure with the ability to accurately detect parasitic diseases can accelerate the process greatly.
Hence, in this work, we propose a deep learning-based parasitic egg detection pipeline. We trained deep learning models using parasitic
egg detection and classification datasets provided by [ICIP Challenge 2022](https://icip2022challenge.piclab.ai/).

We are now rank 2 on the public leaderboard (see [here](https://icip2022challenge.piclab.ai/leaderboard/)) where we get an
mIoU score of 92.946 and mF1Score of 98.633. The competition ends on May 31, 2022. Hopefully, we will rank on top 3 after the
competition finishes! We will explain about the approaches we use on the paper and this blog post later on.

<p align="center">
  <img src="/assets/blogs/icip-2022.png" width=400>
  <br>
  Example of the model prediction
</p>
