# Super Old Greek Formatter?

In the days old people wrote without spaces and punctuation. Since the trend is all about retro you can't get any further back than this (at least when it comes to formatting Greek I would assume).

## What should this program do?

Good question! It should remove all space, punctuation, periods, semicolons, apostrophes [from the Greek word apóstrophos] and question marks. But that's too simple because really ancient Greeks wearing their hipster sunglasses didn't even use lower case letters or accents. So, to be ancient Greek hipsters ourselves it'll need to do this too, yay!

## Test File?

I would provide a test file but since copyright isn't my expertise I have decided to withdraw adding one to my repo for this program. I, however, will recommend Perseus https://www.perseus.tufts.edu/hopper/ as a good source for materials.

## What should the procedures be?

1. Replace unicode characters `\u0300` to `\u036f` with nothing.
2. Replace all non letters with nothing.
3. Uppercase all letters remaing.
4. Profit! (Wait, what?)

## Languages I've done this in...
