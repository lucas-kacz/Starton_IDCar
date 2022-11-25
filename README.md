# Starton_IDCar
GITHUB README content 👇 

### How to setup the project

The smart contract is already deployed on the BSC Testnet, all you have to do is to start a the react app on your machine. 

Steps to use our app :  

- Open up the project folder in Visual Studio, open a new terminal and *cd* into app by typing `cd app` 

- If you have Node.js type `npm install`, then type `npm start`. It should launch a new tab in your web browser 

- Once connected click on the connect button. A Metamask popup should appear, type your password. **Important** : when connecting you should be on the BSC Testnet, if you didn’t add it yet on Metamask follow this [tutorial](https://medium.com/spartanprotocol/how-to-connect-metamask-to-bsc-testnet-7d89c111ab2).

- You are ready to go ! 


### Problem 

What problem does your project solve? How does it fit into the theme "Building a Decentralized Future"? 

When buying a second hand car, you never know what is the exact history of the vehicle (mileage, maintenance, first-hand or more, ...). According to the [French government](https://www.economie.gouv.fr/dgccrf/vente-de-voitures-doccasion-gare-aux-tromperies) 47% of the second-hand vehicles sold in France in 2015 had irregularities concerning the parameters stated above.

Our project aims to solve that problem by using Web3  technologies and properties such as the immutability of the blockchain, ERC721 tokens and timestamps.

Our projects fits into the "Building a Decentralized Future" and more precisely the "E-Society" and "Property Rights" track as it allows our users to certify that their car belongs to them. The maintenance they did on it is now also documented and saved onto the blockchain making it tamper-proof and allowing it to be used by future buyers to make sure about the car's condition. This would drastically reduce fraud and hidden defect when selling cars on the second-hand market. 

### Solution 

How did you resolve this issue? What technologies did you use? What was your biggest technical challenge and how does your solution solve it? 

We resolve this issue by creating a web2 site that links your wallet with your car to see all the data of the car : the car is associated to an NFT (ERC721) containing the VIN (Vehicle identification number) which is the serial number of the car. With this number we can retrieve all the information related to the model, colour and options on the car. 

Every car would also have other token directly associated to it such as maintenance tokens containing useful information regarding the maintenance done (description, success or fail of the maintenance)

We decided to implement our solution solely to one brand and its official garages due to trust factors on the third parts interacting with our product. This means that only aggregated garages would be able to issue maintenance NFTs and therefore greatly reduce misuse of our product.

Our biggest challenge was to transfer all the maintenance tokens with the associated car when selling it to another individual. We solved it by associating each maintenance token to the id of car and transferring them using conditions in our smart contract.


### Facility 

Explain, step-by-step, how someone can install your project and use it. The jury will mainly use MacOS, Ubuntu, Android, and iOS. Setting up a docker/docker-compose is a good idea to allow someone to test the project easily. 

To use our project, you just need to click on this [link] (https://idcar.vercel.app/).
We hosted our project to facilitate acces for all.

### Team and comments 

Specify the name of your team (the same as on the discord/gather), and tell us what you learned during this hackathon! 

The name of your team is : **IdCar**. We learnt a lot of things during this hackathon especially with all the conferences that were given. We saw most of them and they were very interesting (especially the ones that helped us in our project such as the Bnb chain workshop with Starton and the Solidity Workshop). Starton got to be a very useful tool for our project as it made us save considerable amouts of time by giving us the opportunity to test our smart contracts easily. 

We also learned a lot on how to organize ourselves to be the most productive given the short amount of time to carry out our ideas. Everyone in our team had a specific task and we made regular follow-ups to make sure that the production was going fine.


### Project Submission 

Provide an explanation of the features of your projects. You must link a demonstration video with commentary and screen recording of your presentation (10 slides max) or demo product (example: Loom, 4 minutes max). 

[Link to the video](https://www.youtube.com/watch?v=hoaKJOJirDM)

We used Starton to deploy our smart contracts and test them directly on the website. It helped us a lot to see if our code was working as planned and made us save a lot of time.

We deployed our smart contracts on the BNB Chain Testnet due to its speed and low transaction cost compared to the Ethereum blockchain.


 
