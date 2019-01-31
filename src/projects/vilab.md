---
title: "Visual Lab - Facial Recognition AI"
subtitle: "A project done alongside INESC TEC with the purpose of developping facial recognition software in order
to recognize the face of a person with their identity card, using Siamese Twins Neural Networks."
link: https://github.com/andrefmrocha/VI_LAB_2018_Card_Detection
image_1: "../images/siamese-network.png"
image_2: "../images/siamese-network-2.png"
image_1_legend: "A visual example of siamese network"
image_2_legend: "A visual example of a autoencoder"
date: "2018-08-01"
---

Using Bayesian One-Shot Learning Algorithm, the comparison in order to check if the object is present in the image is done as well as a calculation if the image itself is only background clutter. In order to make this check with images, both images are passed as arguments, so that they are both normalized by the same network, being those results then concatenated, so that they are then compared. 
However, beforehand, autoenconders are used to remove background noise from the images.