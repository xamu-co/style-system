<p align="center">
<a href="https://www.npmjs.com/package/@xamu-co/styles">
<img src="https://img.shields.io/npm/v/@xamu-co/styles.svg?sanitize=true" alt="Version">
</a>
</p>

This file needs to be improved

# Xamu naming convention

- based in BEM but reinterpreted for sass and vue
- prefixes prevent the collision with vendor styling
- the "x" stands for xamu

## ELEMENT or LAYOUT:

.x-elementName{}
EJ: .x-view{}
- some of this will expect certain tag
EJ: a.x-link{}
- whenever possible avoid using long names

### CHILDS:
- a "-" will be used to showcase nested elements
.x-parentName-childName{}
EJ: .x-view-item{}

### UTILITY CLASSES:

- each element comes tied with a set classes to alter it
EJ: .x-view.is__active{}
- this allows the duplication without collision

STATUS: (is or has)

.x-elementName.is__statusName{}
EJ: .x-view.is__active{}

MODIFIERS:

.x-elementName.m__modifierName-value{}
EJ: .x-view.m__maxWidth-none{}
- some modifier could be conditionated to the presence of another one
EJ: .x-view.m__theme-light.m__shadow{}

UNIONS: (combination of modifiers, shortcuts for common modifier combinations)

.x-elementName.u__unionName-firstModifier-secondModifier{}
EJ: .x-view.u__flexAlign-center-stretch{}
- if both values are equal the could be merged
EJ: .x-view.u__flexAlign-center-center{} //spread
EJ: .x-view.u__flexAlign-center{} //merged

## PSEUDOS:

*[data-atributeName]{}
EJ: *[data-tip]{}
- for this case we will be using data atributes

### MODIFIERS:

*[data-atributeName-modifierName="expectedValue"]{}
EJ: *[data-tip-position="top"]{}
- these are almost always expecting some argument

## ANIMATIONS:

.a-animationName{}
EJ: .a-fadeIn{}

### UTILITY CLASSES:

- each animation comes tied with a set classes to alter it
EJ: .a-fadeIn.is__animated{}
- the disponible classes are listed here

ANIMATED STATUS:

.a-animationName.is__animated{}
EJ: .a-fadeIn.is__animated{}
- without this class no animation will run
- 
MODIFIERS:

- this status comes with his own set of modifiers

DELAY:

.is__animated.m__delay-value{}
EJ: .is__animated.m__delay-2{animation-delay: 0.2s;}

ITERATIONS:

.is__animated.m__iterations__value{}
EJ: .is__animated.m__iterations-2{animation-iteration-count: 2;}

## GLOBAL MODIFIERS:

.xm__modifierName-value{}
EJ: .xm__maxWidth-none{}
- these work as any other modifier but work in any element
- some modifier could be conditionated to the presence of another one
EJ: .xm__theme-light.xm__shadow{}

## GLOBAL UNIONS:

.xu__unionName-firstValue-SecondValue{}
EJ: .xu__flexAlign-center-stretch{}
- these work as any other union but work in any element
- if both values are equal the could be merged
EJ: .xu__flexAlign-center-center{} //spread
EJ: .xu__flexAlign-center{} //merged

# SASS / CSS RULES

- sass is an amazing preprocesor but some of their rules could become overused

### 1. NO MORE THAN 3 LEVES OF NESTING

### 2. DONT USE THE AMPERSAND TO NEST ELEMENTS CHILDS

EJ: .x{&-name{&-child{}}}
- avoid that

### 3. AMPERSAND USAGE IS ALLOWED FOR MODIFIERS & SIMILAR

EJ: .x-elementName{&.m__modifierName{&__modifierValue{}&__otherModifierValue{}}}
- this is because usually you would be only searching for the element or the modifier name
- as you can see this doesn't break the first rule

### 4. FOR CONDITIONAL MODIFIERS PREPENDING IS PREFERED

EJ: 
.x-elementName{&.m__requiredModifier.conditionalModifier{&__modifierValue{}&__otherModifierValue{}}}
- this limits the nesting and shows the required modifier

### 5. EACH PROPERTY SHOULD FOLLOW THE NEXT ORDER

- TAG, ELEMENT or LAYOUT (a, .x-elementName, etc...)
- PSEUDOSELECTORS (:hover, :focus, etc...)
- STATUSES (.is__statusName, etc...)
- MODIFIERS (.m__modifierName-value, etc...)
- SUBELEMENTS or CHILDS
- OVERWRITES
- MEDIA QUERIES

### 6. AND FOR EACH GROUPED RULES SHOULD GO IN THE END

EJ: .x-element1{}
.x-element2{}
.x-element1, .x-element2{}


# Responsive styles

We are following a similar approach to the tailwind framework (global & layout modifiers only)

.xm__hidden:sm => Hide if element has less than 640px of width;
.xm__hidden:sm-inv => Hide if element has more than 640px of width;

sm => 640px // small
md => 640px // medium, disabled
lg => 640px // large
xl => 640px // extralarge, disabled