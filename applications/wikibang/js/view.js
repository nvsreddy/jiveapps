/*
 *
 *      Copyright 2013 Jive Software
 *
 *      Licensed under the Apache License, Version 2.0 (the "License");
 *      you may not use this file except in compliance with the License.
 *      You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *      Unless required by applicable law or agreed to in writing, software
 *      distributed under the License is distributed on an "AS IS" BASIS,
 *      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *      See the License for the specific language governing permissions and
 *      limitations under the License.
 */

gadgets.util.registerOnLoadHandler(function() {
    opensocial.data.getDataContext().registerListener('org.opensocial.ee.context',
    function(key) {
        var context = opensocial.data.getDataContext().getDataSet(key);
        if (context && context.target && context.target.context && context.target.context.page) {
            var title = context.target.context.page;
			display(title);
			$('#more').attr("href", "http://en.wikipedia.org/wiki/" + title);
            $('#more').show();
        }
    });

});