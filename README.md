# Config Settings

## Root Config Folder (need to create)

this folder should contain 3 files: `dev.env`, `test.env` and `prod.env`
these files should contain 3 variables that can have different values in each:

```
    PRISMA_ENDPOINT=https://yourLocalOrRemotePrismaEndpoint
    PRISMA_SECRET=yourSuperSecretKeyToLockDownPrisma
    JWT_SECRET=yourSuperSecretJsonWebTokenPassKey
```

1. config PRISMA_ENDPOINT in `dev.env` and `test.env` (see above)
   if default docker image has been created you need to add a different name to the path
   example: `PRISMA_ENDPOINT=http://192.168.99.100:4466/food/dev`
   note: `PRISMA_ENDPOINT=http://192.168.99.100:4466` and `PRISMA_ENDPOINT=http://192.168.99.100:4466/default/default` are equivalent.

# Make sure your docker image is open using "Docker Quickstart Terminal"

### Switch in to prisma directory in your console

2. from prisma folder run: `prisma deploy -e ../config/dev.env`

3. from prisma folder run: `prisma deploy -e ../config/test.env`

### Switch back to project root in your console

4. run: `npm install`

5. open `.graphqlconfig` and set the **endpoint** so it matches the endpoint in **dev.env**

6. run `npm run get-schema`
   (this creates or updates the prisma.graphql file in src/generated)

## Test that Test env is able to run

7. run: `npm run test`

## Test that dev env is able to run

8. run `npm run dev`
   (can confirm by navigating to http://localhost:4000)

## Production Settings

(need an account on prisma cloud https://www.prisma.io/cloud)

9. change endpoint in `./config/prod.env`

### Switch in to prisma directory in your console

10. run: `prisma deploy -e ../config/prod.env`

# Node App Deployment

run the following:
on the config:set copy each of the 3 lines of your prod.env file
(this can also be done on the Heroku site, but this is just as easy)
you can use the command `heroku config to confirm your variables have been set.

```
heroku create
heroku config:set PRISMA_ENDPOINT PRISMA_SECRET JWT_SECRET
git commit -am "Init commit"
git push heroku master
```
