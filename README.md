# gethkeeper

A program deisgn for pool operators and is  production UnityMines <br />Akroma pool located http://server2/unitystreams.com/dist/ 
gethkeeper can talk to any ethereum based IPC's that supports account_unlocking .. and attempts to keep your wallet password safe and unlock your ether based account securely

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
