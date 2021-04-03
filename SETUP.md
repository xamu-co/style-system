# Basic proyect setup

```
 npm i --ignore-scripts
 # or
 yarn--ignore-scripts
```

# Development
## SASS & CSS rules
Sass is an amazing preprocesor but some of their rules could become missused

#### No more than 3 leves of nesting

#### Dont use the ampersand to nest elements childs, avoit this:
```scss
 .x {
     &-name {
         &-child {}
     }
 }
```

#### Ampersand usage is allowed for modifiers & similar
- This is because usually you would be only searching for the element or the modifier name
- As you can see this doesn't break the first rule
```scss
 .x-elementName {
     &.m__modifierName {
         &__modifierValue {}
         &__otherModifierValue {}
     }
 }
```

#### For conditional modifiers prepending is prefered
- This limits the nesting and shows the required modifier
```scss
 .x-elementName {
     &.m__requiredModifier.conditionalModifier {
         &__modifierValue {}
         &__otherModifierValue {}
     }
 }
```

#### Each property should follow the next order
- Tag, element or layout (a, .x-elementname, etc...)
- Pseudoselectors (:hover, :focus, etc...)
- Statuses (.is__statusname, etc...)
- Modifiers (.m__modifiername-value, etc...)
- Subelements or childs
- Overwrites
- Media queries

#### And for each grouped rules should go in the end
```scss
 .x-element1 {}
 .x-element2 {}

 /** Rule group */
 .x-element1,
 .x-element2 {}
```

