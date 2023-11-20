# Redis Demo

This is a demo of how to use Redis with Node.js. If you would like a deeper dive into how Redis works and why you would want to use it. See my [blog post](https://www.connorlittleton.dev/blog/redis) on the topic.

## Overview

A lot of demos out there these days will show you how to use Redis using [Upstash](https://upstash.com/) or Redis Labs. While these are great services, they aren't super practical for a lot of use cases. This purpose of this demo is to get you up and running with Redis on your local machine. In a work setting, there would need to be a lot more work to get this on a remote server, but this demo will get you started with the basics.

## Setup

In order to run this demo, you need to have Redis installed and running on your machine. You can download Redis via brew with `brew install redis` or by following the instructions on the [Redis website](https://redis.io/download).

Once you have Redis installed, you can run it with `redis-server`. You should see a bunch of text pop up in your terminal. This is the Redis server running. You can stop the server with `ctrl + c`.

Once you have Redis running, you can run the demo with `npm run dev`. This will run start up our Next.js application. You can view the application at `localhost:3000`.
