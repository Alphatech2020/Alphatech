var aItem = $('.accordion:not(.toggles) .accordion-item'),
link = aItem.find('.a-title'),
$label = aItem.find('label'),
aToggleItem = $('.accordion.toggles .accordion-item'),
tLink = aToggleItem.find('.a-title');

aItem.add(aToggleItem).children('.a-title').not('.active').next().hide();

function triggerAccordeon($item) {
$item
.addClass('active')
.next().stop().slideDown()
.parent().siblings()
.children('.a-title')
.removeClass('active')
.next().stop().slideUp();
}


if ($label.length) {
$label.on('click',function(){
    triggerAccordeon($(this).closest('.a-title'))
});
} else {
link.on('click',function(){
    triggerAccordeon($(this))
});
}

tLink.on('click',function(){
$(this).toggleClass('active')
.next().stop().slideToggle();

});