(function() {
    'use strict';
    init();

    function init() {
        smoothScroll.init();

        var wow = new WOW({mobile: false});
        wow.init();

        tagsGenerator();
    }

    function tagsGenerator() {
        var skillsJavascript = ['Javascript', 'AngularJs', 'Angular +2', 'Express', 'Nodejs', 'Karma', 'jquery', 'Grunt', 'Gulp', 'Sinon', 'Chai', 'Mocha', 'Jasmine', 'Protractor', 'Chrome Extensions', 'Ionic', 'React native', 'Typescript', 'Cordova', 'React', 'Redux'],
            skillsPhp = ['PHP', 'Zend Framework', 'Laravel', 'phpUnit', 'composer', 'poo', 'Maven', 'ant', 'Jbehave', 'Selenium', 'Java', 'MySQL', 'mongodb', 'Rest services', 'Python', 'Django', 'Ruby', 'HapiJs'],
            skillsOthers = ['HTML5', 'CSS3', 'less', 'sass', 'git', 'perforce', 'Heroku', 'Codeship', 'Bitbucket', 'Jenkins', 'Bower', 'Atlassian tools', 'Agile methodology', 'Responsive design', 'Jade', 'WebPack'],
            colors = ['btn-info', 'btn-success', 'btn-danger', 'btn-primary', 'btn-warning'],
            i = 0;

        $.each(skillsJavascript, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-1').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
        $.each(skillsPhp, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-2').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
        $.each(skillsOthers, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-3').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
    }
})();
