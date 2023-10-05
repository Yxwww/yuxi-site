---
title: Building performant web visualization
description:
published: 2023-08-31
tags: performance, visualization, web development
---

Throughout my career, I've had the pleasure to be intimately involved in several web visualization projects. In the first couple years, I was directly using _canvas api_ to render 2D graphics based on realtime sensor data collected from devices such as MS kinect, Google Tango, and Wearable devices. After that, I was heavily involved in a 3D data visualization project using _Three.js_. where the data is already available. The trick is to figure out how to render out the large amount of geological/medical data in a way that makes sense to human. During the time, I was also involved in other couple 2D map visualization project with _d3.js_.

There are some tricks or principles I had picked up along the way, I thought worth mentioning for future reference.

## Start from understanding the users

## Thinking in frames

## Every pixel matters

The pixels that doesn't matter should not be in the rendering buffer.

## Call stack needs to be clean
