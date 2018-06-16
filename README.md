First install meteor on your system if you dont have it ( https://www.meteor.com/install )

```sh
curl https://install.meteor.com/ | sh
```

Install the dependencies and devDependencies .

```sh
npm install
```

Start Server.

```sh
npm start
```

If all worked correctly you should see

```sh
Before IF

After IF
```

But you see this

```sh
Before IF

false ? SHOULD NOT SHOW : null

After IF
```
