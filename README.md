# gethkeeper

Gethkeeper is a program designed for pool operators and is already operating in a production enviroment as of 2018.. 

Gethkeeper is already serving established stratum providers such as unityMines<br />

Gethkeeper can talk to any ethereum based IPC's that supports account_unlocking.  </br >

Gethkeeper attempts to keep your pool's wallet password secure and provides you the convenience of automating all pool payouts.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Hopefully the installer gets every thing
```
NodeJS 8.9.x
```

### Installing
``
$ wget -qO- https://raw.githubusercontent.com/sunscreen/gethkeeper/master/setup.sh | bash

<br />

Presently the code is setup for Akroma Coin (https://Akroma.io/) and can not be changed without editing the installer and source code directly ... we will work on some functionality for this

<br />

If all goes well binary called `account_unlock` will be created inside /home/Youruser/account_unlocker1.0/
``

## Usage

```
./account-unlock -dec <rpcport> .. run this how you please
./account-unlock -enc <rpcport> .. only really needed in the installer
./account-unlock -regeniv <iv> .. Work in progress

```


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [web3 ipc](https://github.com/tjade273/web3_ipc) - The web framework used
* [prompt-promise](https://www.npmjs.com/package/prompt-promise) - Sane prompt
* [crypto](http://nodejs.cn/doc/node/crypto.html) - Crypto

## Contributing

please feel free

## Authors

ncoredump

See also the list of [contributors](https://github.com/your/gethkeeper/contributors) who participated in this project.

## License

## Bugs 
:(


## Acknowledgments
going to build a list

## coffeee

* [eth] (0x37b2dce1431e1dfd641208175706a7c75382d389)
* [akroma] (0x11a092a0ff133971f64da5481bb5099a3bd0c7d0)
* [btc] (1Edg5PP897tnb8RoiFyhNTzXpx3mmGs9hC)
