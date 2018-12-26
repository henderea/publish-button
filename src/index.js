require('./jquery-ui-1.11.4.min.css');
require('./index.scss');
const $ = require('jquery');
window.jQuery = window.$ = $;
require('./jquery-ui-1.11.4.min');
const _ = require('lodash');
require('./fontawesome-all.min');
import registerServiceWorker from '@henderea/static-site-builder/registerServiceWorker';
registerServiceWorker();

var published = false;

const hideNotifyDiv = _.debounce(() => $('#notifyDiv').css('opacity', 0), 3000);

function showNotify(text) {
    $('#notifyText').html(text);
    $('#notifyDiv').css('opacity', 1);
    hideNotifyDiv();
}

$(function() {
    $('#publishButton').button().click(function() {
        var $this = $(this);
        if(!published) {
            $this.button('disable');
            $this.button('option', 'label', '<i class="far fa-spinner fa-pulse"></i>');
            $this.button('refresh');
            setTimeout(() => {
                $this.button('option', 'label', 'Unpublish');
                $this.button('enable');
                $this.button('refresh');
                showNotify('Published');
            }, 1000);
        } else {
            $this.button('disable');
            $this.button('option', 'label', '<i class="far fa-spinner fa-pulse"></i>');
            $this.button('refresh');
            setTimeout(() => {
                $this.button('option', 'label', 'Publish');
                $this.button('enable');
                $this.button('refresh');
                showNotify('Unpublished');
            }, 1000);
        }
        published = !published;
    });
});