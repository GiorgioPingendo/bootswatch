// Core variables and mixins
var deps = ["mixins/hide-text.less",
 "mixins/opacity.less",
 "mixins/image.less",
 "mixins/labels.less",
 "mixins/reset-filter.less",
 "mixins/resize.less",
 "mixins/responsive-visibility.less",
 "mixins/size.less",
 "mixins/tab-focus.less",
 "mixins/text-emphasis.less",
 "mixins/text-overflow.less",
 "mixins/vendor-prefixes.less",
 "mixins/alerts.less",
 "mixins/buttons.less",
 "mixins/panels.less",
 "mixins/pagination.less",
 "mixins/list-group.less",
 "mixins/nav-divider.less",
 "mixins/forms.less",
 "mixins/progress-bar.less",
 "mixins/table-row.less",
 "mixins/background-variant.less",
 "mixins/border-radius.less",
 "mixins/gradients.less",
 "mixins/clearfix.less",
 "mixins/center-block.less",
 "mixins/nav-vertical-align.less",
 "mixins/grid-framework.less",
 "mixins/grid.less",
"normalize.less",
"print.less",
"glyphicons.less",
"scaffolding.less",
"type.less",
"code.less",
"grid.less",
"tables.less",
"forms.less",
"buttons.less",
"component-animations.less",
"dropdowns.less",
"button-groups.less",
"input-groups.less",
"navs.less",
"navbar.less",
"breadcrumbs.less",
"pagination.less",
"pager.less",
"labels.less",
"badges.less",
"jumbotron.less",
"thumbnails.less",
"alerts.less",
"progress-bars.less",
"media.less",
"list-group.less",
"panels.less",
"responsive-embed.less",
"wells.less",
"close.less",
"modals.less",
"tooltip.less",
"popovers.less",
"carousel.less",
"utilities.less",
"responsive-utilities.less"]

for (var x = 0; x < deps.length; x++) {
  deps[x] = "./bower_components/bootstrap-3.3.0/less/" + deps[x];
}

module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: '\n',
            },
            dist: {
                src: deps,
                dest: "bootstrap-3.3.0.less"
            }
        }
    });

  grunt.registerTask('cleanBuildProd',function() {
      if(grunt.file.isFile('build_temp_min.js'))
          grunt.file.delete('build_temp_min.js',{force: true});
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default',['concat']);
  // grunt.registerTask('buildjs-prod',['copy','concat','rename','cleanBuildProd']);
}