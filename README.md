<p align="center">
<a href="https://www.npmjs.com/package/@xamu-co/style-system">
<img src="https://img.shields.io/npm/v/@xamu-co/style-system.svg?sanitize=true" alt="Version">
</a>
</p>

# Class naming convention

These are the basic guidelines behind this project.

-   based in BEM but reinterpreted for sass and vue
-   prefixes prevent the collision with vendor styling
-   the "x" stands for xamu

Explore the [docs](https://styles.xamu.com.co/) or learn how to setup the project for development at: [Setup](SETUP.md)

## Elements & layouts:

They are the main building blocks of any design.

### Root components

Elements & layouts all share a root component

**.x-componentName{}**

```css
.x-view {
}
```

Some of them will expect certain tag

```css
a.x-link {
}
```

Whenever possible avoid using long names. **x-flx** will always be better than **x-flexbox** while mantaining legibility

### Nested components

Elements & layouts could have nested components, to differentiate them from their parent a **"-"** will be used

**.x-parentComponentName-childComponentName{}**

```css
.x-view-item {
}
```

## Utility classes:

Each element comes tied with a set classes to alter it

```scss
.x-componentName.utilityType__utilityName-utilityfirstOptionalParam-utilitysecondOptionalParam {
}
.x-componentName {
	&.utilityType__utilityName {
		&-utilityfirstOptionalParam {
			&-utilitysecondOptionalParam {
			}
		}
	}
}
```

This allows the duplication without collision

### Status

As the name implies these are for management of the design state and are usually called upon in a dinamyc way using js or related languages
It can be **"has"** but we recommend using **"is"**, These usually don't have need params

**.x-elementName.is\_\_statusName{}**

```css
.x-view.is__active {
}
```

### Modifiers

These could modify the behavior of the component they are applied on

**.x-elementName.m\_\_modifierName-optionaParam{}**

```css
.x-view.m__maxWidth-none {
}
```

Some modifier could be conditionated to the presence of another one

```css
.x-view.m__theme-light.m__shadow {
}
```

### Unions

While modifiers are useful they can also get to verbose. That is whe unions come handy.
Combination of modifiers, shortcuts for common modifier combinations

**.x-elementName.u\_\_unionName-firstModifier-secondModifier{}**

```css
.x-view.u__flxAlign-center-stretch {
}
```

If both values are equal the could be merged

```css
/** Long version */
.x-view.u__flxAlign-center-center {
}

/** Short version */
.x-view.u__flxAlign-center {
}
```

## Pseudos

Components, but this time making use of pseudo elements (:before, :after)
For the pseudos we will be using data atributes.

**[data-pseudoName]{}**

```css
[data-tip] {
}
```

### Modifiers & Unions:

Slightly different syntax, but don't worry the concept is mantained.
Some of them are expecting an argument

**[data-pseudoName-modifierNameOrParam-optionalParam="optionalArgument"]{}**

```css
[data-tip-position="top"] {
}
```

## Globals

Some properties can be used across the design.
Global classes are prepended with **"x"**
They also tend to override component modifiers and unions

### Modifiers

These modify the behavior of any element

**.xm\_\_globalModifierName-value{}**

```css
.xm__maxWidth-none {
}
```

Just like the component modifiers but these work in any element
Some modifier could be conditionated to the presence of another one

```css
.xm__theme-light.xm__shadow {
}
```

### Unions:

Condense most common modifiers of rules that require multiple parameters

**.xu\_\_globalUnionName-firstValue-SecondValue{}**

```css
.xu__flxAlign-center-stretch {
}
```

As any other union but work in any element
If both values are equal the could be merged

```css
/** Long version */
.xu__flxAlign-center-center {
}

/** Short version */
.xu__flxAlign-center {
}
```

## Responsive styles

We are following a similar approach to the tailwind framework (only for global modifiers & unions)

```css
/** Hide if element has less than 640px of width */
.xm__hidden:sm {
}

/** Hide if element has more than 640px of width */
.xm__hidden:sm-inv {
}
```

-   **xs**: 358px, extra small, enabled in specific cases
-   **sm**: 576px, small
-   **md**: 768px, medium, enabled in specific cases
-   **lg**: 1080px, large
-   **xl**: 1280px, extralarge, enabled in specific cases
