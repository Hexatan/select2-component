export const srcVueTemplateHtml = `<div class="select2 select2-container select2-container--default select2-container--below select2-container--focus"><div class="selection" @click="toggleOpenAndClose()"><div class="select2-selection select2-selection--single" role="combobox"><span class="select2-selection__rendered" :title="optionLabel">{{optionLabel}}</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></div></div><div :class="dropdownStyle" @blur="focusout()"><div class="select2-dropdown select2-dropdown--below"><div class="select2-search select2-search--dropdown"><input ref="searchInput" v-model="searchText" @keyup="keyUp($event)" class="select2-search__field" type="search" role="textbox"></div><div class="select2-results"><ul ref="results" class="select2-results__options" role="tree"><template v-for="groupOrOption in filteredData"><li v-if="groupOrOption.options" class="select2-results__option" role="group"><strong class="select2-results__group">{{groupOrOption.label}}</strong><ul class="select2-results__options select2-results__options--nested"><li v-for="option in groupOrOption.options" :class="getOptionStyle(option.value)" role="treeitem" :aria-selected="option.value === value ? 'true' : 'false'" @mouseenter="mouseenter(option.value)" @click="click(option)">{{option.label}}</li></ul></li><li v-else :class="getOptionStyle(groupOrOption.value)" role="treeitem" :aria-selected="groupOrOption.value === value ? 'true' : 'false'" @mouseenter="mouseenter(groupOrOption.value)" @click="click(groupOrOption)">{{groupOrOption.label}}</li></template></ul></div></div></div></div>`;
