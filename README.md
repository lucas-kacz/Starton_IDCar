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

Our project solves the problem of data falsification when selling between individuals. With blockchain and our partner, we certify the car’s data: for example, its mileage or its last maintenance. 

Our projects fits into the "Building a Decentralized Future" and more precisely the "E-Society" and "Property Rights" track as it allows our users to certify that their car belongs to them. The maintenance they did on it is now also documented and saved on the blockchain making it tamper-proof and be used by future buyers to make sure about the car's condition. This would drastically reduce fraud and hidden defect when selling cars on the second-hand market. 

### Solution 

How did you resolve this issue? What technologies did you use? What was your biggest technical challenge and how does your solution solve it? 

We resolve this issue by creating a web2 site that links your wallet with your car to see all the data of the car : the car is associated to an NFT (ERC721) containing the VIN (Vehicle identification number) which is the serial number of the car. With this number we can retrieve all the information related to the model, colour and options on the car. 

Every car would also have other token directly associated to it such as maintenance tokens containing useful information regarding the maintenance done (description, success or fail of the maintenance)

We decided to implement our solution solely to one brand and its official garages due to trust factors on the third parts interacting with our product. This means that only aggregated garages would be able to issue maintenance NFTs and therefore greatly reduce misuse of our product.

Our biggest challenge was to transfer all the maintenance tokens with the associated car when selling it to another individual. We solved it by associating each maintenance token to the id of car and transferring them using conditions in our smart contract.


### Facility 

Explain, step-by-step, how someone can install your project and use it. The jury will mainly use MacOS, Ubuntu, Android, and iOS. Setting up a docker/docker-compose is a good idea to allow someone to test the project easily. 

- Our website is hosted online, you can acces it using this [link](https://idcar.vercel.app/)

- Clone the repo on your local machine

- Type `cd app`

- If you don't have some of the libraries used such as ethers type `npm install`, if you do skip this step

- Type `npm start` to launch the website on your machine

- A new tab should open on your web browser

- For testing purposes the conditions on car and service creations have been disabled (in real conditions only partners would be able to create new cars and maintenance tokens)

- Now you can use our website, you can check our [tutorial](https://medium.com/spartanprotocol/how-to-connect-metamask-to-bsc-testnet-7d89c111ab2) to know how to use it.

- We used Starton a lot to test the functions of our smart contract. If you want to do a more in-depth testing you can try the contract on Starton by importing our smart contract.
  1. Create an account or Login
  2. Open your existing project
  3. Select Smart Contract
  4. New Smart Contract / Import a Smart Contract
  5. Name it as you want and go next
  6. There should be a text file in the repository named starton.txt. For each contract copy/paste the address and ABI and select BNB Chain Testnet
  7. You're ready to go ! Click on interract and you should be able to use our functions when connected to your wallet

### Team and comments 

Specify the name of your team (the same as on the discord/gather), and tell us what you learned during this hackathon! 

The name of your team is : **IdCar**. We learnt a lot of things during this hackathon especially with all the conferences that were given. We saw most of them and they were very interesting (especially the ones that helped us in our project such as the Bnb chain workshop with Starton and the Solidity Workshop). Starton got to be a very useful tool for our project as it made us save considerable amouts of time and test our smart contractss easily. 

We also learned a lot on how to organize ourselves to be the most productive given the short amount of time to carry out our ideas. Everyone in our team had a specific task and we made regular follow-ups to make sure that the production was going fine.


### Project Submission 

Provide an explanation of the features of your projects. You must link a demonstration video with commentary and screen recording of your presentation (10 slides max) or demo product (example: Loom, 4 minutes max). 

Include a brief demonstration of the use of Starton or its partners iExec, BNB Chain, NodeReal, or Ledger. The more you use partner technologies, the more points you will earn. Example: Use the Starton API on the BNB Chain blockhain. You have used two partners. </aside> 

Starton : We used Starton to deploy our smart contracts and test them directly on the website. It helped us a lot to see if our code was working as planned and made us save a lot of time.

We deployed our smart contracts on the BNB Chain Testnet due to its speed and low transaction cost compared to the Ethereum blockchain.


 
