---
layout:     post
title:      New Project at Gentherm
subtitle:   Helping the workflow.
date:       2015-08-02 00:00:00
author:     Norbert Berényi
---

Long time since I wrote a post, I had a lot going on in my life... One of witch is the new Project I'm working on at Gentherm.
The project is awesome, I'm so happy I can work on it. So what is it? It is a **document and equipment managing web application**.

## The idea details

The whole idea started with me being lazy. Writing test reports are boring as hell... So I came up with the idea of an application that can write the reports instead of us. Combining this with the QR code reader project I was doing, made a prefect combination. (Scanning the equipments with a QR Scanner to skip the calibration validation.)

While I was working on it my boss also came up with an idea. He wanted all of our mechanical machines to be monitored so the engineers don't need to check them every hour. Combining this with my idea made the final project.

At the end stage I want the app being able to offer available mechanical machines for test, reserving that machine as unavailable and reporting about it's state. During the tests the engineers make notes in the app, scan equipments with it. At the end the app would make the test report.

With this process we can save 3-5 hours / test report.

## The framework

What is needed for the project:
- Database management
- Easily manageable interface
- Flexibility for future improvements

With these needs I decided to go with `Laravel`. It is one of the best PHP frameworks out there with great [documentation](http://laravel.com/docs/master) and great [tutorial videos](https://laracasts.com/).
