## The Saving Goal Plan Simulation Screen

![Saving Goal Plan Mockup Desktop](https://github.com/lucaziz/saving-goals/blob/master/mockups/saving-goal-plan-desk.png)

## Usage

This project requires `Node >=12` and `NPM >= 6`.

After you have cloned this repo, install the dependencies with:

```
npm install
```

You can then start the application running:

```
npm run dev
```

That's it. Just Access `http://localhost:1234` in your browser.

### Linting

```
npm run lint
```

### Testing

```
npm run test
```

### To improve

- Implement inline src instead of usage of *img*;
- Confirmation (modal?) when removing a goal;
- More micro interactions;
- More test cases;
- Componentization (theme)

# Getting Started
1. In the Home screen, you can click in the 'Saving Goal' Card.

2. For now you will be redirected to the Savings Detail page, where you can type what is your goal, total amount, reach goal by (starts with 48 months from now);
    - The monthly amount will be displayed without taxes/yields;
    - The description will be shown in the bottom of the page.
    - After everything gets filled, the Finish button will be enabled and you can add a new Goal.

3. The page will be redirected to your list of Goals;
    - Now you can edit your goals by clicking in the item list;
    - Also remove unwanted goal;

4. Validations:
    - If you try to add a new goal with a name that already exist, an error message will be shown;
    - You cannot choose a past month, Month picker won't let you (It's M + 1).
    - There is no limitation for the amount. Dreams have no limit, right?
    - If you edit a goal, you can't change the title, if you wan't to change it, you can remove the wrong one and add another one with the right title;

Mobile version is fancy;

#### Enjoy.
