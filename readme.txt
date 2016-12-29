--> enable code for case 1
Okay I am my mac which has retina (2x) display
lets fire up a simpleHTTPServer head to dev tool 'Network' section
shrink veiwport to minimum
and observe
As we increase size of our veiwport how magically :) our browser picks the right
source for us. Initially it picks 320px for as and as our viewport size heads to
almost 320px it picks 640px image for us (remember we are on a 2x display :B)
and as we head towrds 640 viewport width it picks 1280px image for us - isn't it
so cool!! ?
also try going to emulation mode and try it on 1 1x display
 ---
 Similarly we can use 1x 2x descriptor
 and can use Sizes attribute and apply media queries as per our requirement
 you can enable code for cases and see how it works
 ---
 --> Case 2
 Here we just provide 2 image one for 1x displays and other for 2x displays
 simply you can in 'Network' tab that it download image as per display Device
 pixel Ratio
 ---
 --> Case 3
This cases uses sizes attribute and tell the browser that image will be displayed
at 50% viewport width when viweport width is less than 760px otherwise 100% vw
see how amazing browser picks the right image - making thing so easy for us. it
take cares of high definition screens for us also when download the right image
when it's 50% vw Ex. say vw is 1000px on a 2x display and vw is 50%
(so image render area would be 500px) so it'll download
1280px image for us. SMART isn't it and on 1x it'll download 640px. SMART!
 ---
 Case 4
 Just using <picture> element to display webp for browser that support webp and
 providing jpeg as an alternative for those who doesn't
 ---
 --> Case 5
using media attribute and supplying different images for different viewport sizes
and pixel densities
 ---
 --> Case 6
 It envolves all :)
 Providing different formats for different viewports for devices with different
 pixel densities :B
 ---
