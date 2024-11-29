"use client"
import Count from '@/components/common/Count'
import React from 'react'

interface CounterType {
	id: number;
	count: number;
	symbol: string;
	title: string;
	icon: string;
}

const counter_data:CounterType[] = [
	{
		id: 1,
		count: 150,
		symbol: `+`,
		title: `Our Happy Students`,
		icon: `<svg fill="none" viewBox="0 0 30 22"><path fill="#0D5FF9" d="M14.21.765c-1.747.258-3.141 1.454-3.675 3.159-.193.632-.193 1.822 0 2.46.598 1.917 2.291 3.165 4.301 3.17.774 0 1.248-.105 1.951-.445.938-.451 1.57-1.084 2.051-2.033.358-.709.457-1.225.428-2.115-.024-.575-.059-.809-.188-1.184a4.387 4.387 0 00-1.084-1.734c-.72-.721-1.57-1.137-2.601-1.278-.516-.07-.68-.07-1.184 0zm1.728 1.108A3.55 3.55 0 0118.17 4.11c.182.557.2 1.488.03 1.98-.428 1.266-1.296 2.086-2.543 2.409-1.131.287-2.327-.024-3.211-.85-.463-.428-.727-.838-.944-1.453-.199-.568-.21-1.459-.023-2.039.369-1.16 1.465-2.162 2.613-2.397.475-.093 1.406-.04 1.846.112zM23.32 3.835c-1.184.27-2.215 1.213-2.584 2.373-.147.445-.176 1.395-.059 1.816.158.575.475 1.114.902 1.553.48.48.803.686 1.395.885.885.299 1.775.229 2.666-.205 2.332-1.154 2.549-4.412.392-5.889-.773-.527-1.828-.732-2.712-.533zm1.47 1.002c.446.135.75.328 1.102.697 1.166 1.23.768 3.182-.797 3.908-1.02.48-2.338.153-3.018-.744-.369-.48-.48-.843-.486-1.523 0-.54.018-.615.188-.985a2.628 2.628 0 011.57-1.365c.334-.105 1.066-.1 1.441.012zM5.22 4.076a3.533 3.533 0 00-2.168 1.46 3.392 3.392 0 00.445 4.341c.61.603 1.606 1.02 2.45 1.02 1.459 0 2.865-1.043 3.316-2.461.188-.575.176-1.465-.023-2.04-.211-.603-.475-1.019-.932-1.447a3.416 3.416 0 00-3.088-.873zm1.752 1.12c.703.333 1.137.831 1.36 1.564.351 1.148-.223 2.396-1.342 2.924-.756.351-1.77.275-2.444-.194-.357-.24-.732-.668-.884-1.013-.61-1.336.058-2.883 1.47-3.381.276-.094.457-.117.903-.1.48.012.609.041.937.2zM14.297 10.175c-1.793.176-3.51.92-4.764 2.068l-.398.37-.569-.27c-.691-.328-1.166-.475-1.857-.568-2.748-.387-5.496 1.312-6.398 3.955C.07 16.433 0 17.025 0 18.279c0 1.154 0 1.16.164 1.47.117.229.24.364.451.492l.281.176 2.971.018 2.977.018.035.234a1.5 1.5 0 00.504.896c.498.452-.13.416 7.617.416 7.746 0 7.12.036 7.617-.416.334-.298.48-.615.516-1.09l.03-.392 2.935-.018c2.086-.011 2.982-.04 3.088-.087.257-.112.591-.44.703-.692.093-.2.111-.398.111-1.383 0-1.248-.07-1.84-.31-2.543a5.924 5.924 0 00-3.82-3.738c-1.624-.51-3.517-.281-4.917.586l-.287.182-.363-.311c-1.659-1.406-3.914-2.133-6.006-1.922zm1.91 1.043a7.164 7.164 0 015.83 5.608c.1.492.129.867.147 2.056.029 1.576 0 1.834-.252 2.027-.153.124-.182.124-6.932.124-6.709 0-6.785 0-6.932-.118-.252-.199-.275-.386-.252-1.992.018-1.254.041-1.594.147-2.097a7.185 7.185 0 015.777-5.602c.633-.111 1.828-.117 2.467-.006zm9.1 1.266a4.996 4.996 0 013.58 3.592c.1.392.117.65.117 1.675 0 .862-.018 1.225-.07 1.278-.053.052-.78.07-2.924.07h-2.848l-.035-1.014c-.053-1.465-.275-2.361-.896-3.562a8.797 8.797 0 00-.587-.967l-.31-.428.193-.123c1.032-.633 2.526-.838 3.78-.521zm-18.147.369c.498.123 1.277.457 1.277.539 0 .018-.11.187-.24.387-.345.504-.843 1.57-1.02 2.185-.228.785-.322 1.535-.322 2.56v.927H3.99c-2.443 0-2.87-.012-2.935-.088-.053-.065-.065-.428-.047-1.418.023-1.196.04-1.383.158-1.746.574-1.747 1.957-3.012 3.727-3.399.603-.135 1.628-.111 2.267.053z" /></svg>`,
	},
	{
		id: 2,
		count: 20,
		symbol: `+`,
		title: `Enrolled Learners`,
		icon: `<svg fill="none" viewBox="0 0 30 23"><path fill="#0D5FF9" d="M14.403.2c-.217.029-.598.128-.85.222C12.92.657.83 6.443.588 6.625c-.293.223-.527.58-.574.88-.094.644.287 1.13 1.302 1.641l.668.34v5.464l-.281.182c-.61.393-.904 1.15-.716 1.83.094.345.393.756.674.926.141.087.264.181.264.21a307.2 307.2 0 01-1.507 4.82c-.023.07.335.082 2.152.082 1.947 0 2.176-.012 2.146-.088-.093-.246-1.5-4.76-1.5-4.82 0-.034.076-.093.17-.128.562-.24.961-1.173.773-1.853-.1-.387-.387-.78-.71-.979l-.292-.182V12.53c0-1.337.017-2.427.04-2.427.024 0 .435.187.91.422l.867.416v3.64c0 3.607 0 3.642.124 3.847.193.317 1.489 1.571 2.075 2.005a12.9 12.9 0 006.01 2.433c.892.117 2.686.117 3.578 0 2.24-.305 4.222-1.108 6.01-2.427.64-.475 1.959-1.782 2.1-2.081.087-.194.099-.522.099-3.794v-3.588l2.14-1.05c1.179-.574 2.246-1.13 2.375-1.23.328-.258.551-.745.51-1.085a1.46 1.46 0 00-.504-.915C29.139 6.39 16.937.451 16.38.311c-.528-.135-1.443-.188-1.977-.112zm1.765 1.195c.176.053 2.616 1.22 5.424 2.592C24.402 5.359 27.18 6.719 27.761 7c.586.287 1.085.563 1.102.616.024.058-.005.146-.064.217-.106.117-4.24 2.18-4.51 2.245a.435.435 0 00-.199.112c-.035.04-1.806.92-3.946 1.952-2.88 1.395-3.97 1.894-4.228 1.94-.492.088-1.231.077-1.67-.023-.247-.058-1.801-.774-4.487-2.064-2.263-1.084-4.362-2.087-4.667-2.233-.305-.147-.528-.276-.499-.282.036-.012 2.422-.299 5.307-.639 5.647-.662 5.47-.633 5.594-.99.076-.2-.006-.429-.211-.581l-.158-.117-6.087.715c-3.348.393-6.151.715-6.233.721-.2.012-1.613-.68-1.665-.815-.03-.076 0-.135.1-.211.146-.111 11.82-5.746 12.442-6.004a3.37 3.37 0 011.613-.281c.305.012.697.07.873.117zm-6.52 11.732c1.93.92 3.63 1.724 3.782 1.782.147.065.493.159.756.211.622.123 1.724.082 2.252-.082.194-.058 1.923-.88 3.847-1.817 1.917-.944 3.506-1.712 3.53-1.712.023 0 .04 1.448.04 3.218v3.22l-.416.445c-1.29 1.378-3.154 2.497-5.09 3.054-2.028.58-4.467.61-6.455.077-1.173-.311-2.545-.927-3.495-1.56-.651-.44-1.665-1.302-2.029-1.73l-.281-.328v-3.224c0-1.777.011-3.23.029-3.23.012 0 1.6.755 3.53 1.676z" /></svg>`,
	},
	{
		id: 3,
		count: 1,
		symbol: ``,
		title: `Expert Instructor`,
		icon: `<svg fill="none" viewBox="0 0 30 30"><path fill="#0D5FF9" d="M8.848 10.015c-.13.123-.147.194-.147.557 0 .363.018.433.147.556.088.094.21.147.322.147a.457.457 0 00.322-.147c.13-.123.147-.193.147-.556 0-.363-.018-.434-.147-.557a.457.457 0 00-.322-.146.457.457 0 00-.322.146zM14.47 10.015c-.128.123-.146.194-.146.557 0 .363.018.433.147.556a.457.457 0 00.322.147.457.457 0 00.323-.147c.128-.123.146-.193.146-.556 0-.363-.018-.434-.146-.557a.457.457 0 00-.323-.146.457.457 0 00-.322.146zM10.256 14.703c-.686.68 1.09 1.53 2.46 1.172.417-.112.88-.358 1.032-.545.346-.446-.217-1.008-.656-.662-.352.27-.533.328-1.108.328-.574 0-.755-.059-1.107-.328a.454.454 0 00-.621.035z" /><path fill="#0D5FF9" d="M10.693.064C8.977.3 6.686 1.09 4.236 2.285c-1.804.88-1.793.838-.556 2.057l.873.85-.082.234c-.188.545-.252 1.207-.252 2.666v1.453l-.158.088c-.223.117-.452.369-.61.68-.187.351-.228 1.183-.082 1.67.182.638.873 1.142 1.559 1.142.252 0 .228-.053.345.703.141.838.504 1.723 1.05 2.549.292.445 1.16 1.348 1.458 1.523.182.106.188.13.188.475 0 .334-.012.363-.147.398-.088.024-.234.17-.386.405-.135.199-.252.369-.258.38-.006.006-.862.264-1.899.569-1.037.305-2.056.633-2.261.727a5.195 5.195 0 00-2.93 3.785c-.07.398-.088 1.02-.088 2.795v2.279l.146.14.141.147H23.15l.147-.146.146-.147-.017-2.508c-.024-2.338-.03-2.531-.153-2.953a5.575 5.575 0 00-.85-1.764l-.327-.45h7.617l.14-.147.147-.14V2.63l-.146-.14-.141-.147h-12.24l-.27-.37c-.668-.913-1.869-1.529-3.55-1.822-.663-.117-2.38-.17-2.96-.088zm2.204.932c1.412.14 2.63.598 3.263 1.219.393.38.569.691.656 1.137.036.17.077.369.094.439.012.07.158.281.322.469.375.428.668.955.862 1.53.14.427.152.526.175 2.015l.024 1.57h-.328c-.276 0-.358-.023-.475-.146-.146-.141-.146-.159-.146-1.16 0-1.272-.065-1.512-.504-1.958-.55-.556-1.213-.62-2.373-.234-1.242.416-2.801.65-4.33.65-1.014 0-1.12-.011-1.612-.158-1.289-.392-2.677-1.271-4.101-2.578l-.41-.38.644-.306c2.496-1.183 4.336-1.816 5.988-2.074.64-.1 1.454-.111 2.25-.035zm16.166 11.191v8.907h-8.151l-.305-.153a5.908 5.908 0 00-.51-.234c-.17-.059.481-.076 4.003-.076l4.207-.006.14-.146.147-.141v-16.3l-.147-.142-.14-.146H18.018l-.13-.193a.886.886 0 01-.134-.235c0-.023 2.543-.04 5.654-.04h5.654v8.905zm-1.407 0v7.5h-5.49c-3.486 0-5.572-.023-5.701-.058-.158-.047-.258-.14-.451-.44-.164-.246-.305-.392-.399-.416-.135-.035-.146-.058-.146-.41 0-.205.023-.375.047-.375.029 0 .252-.17.498-.375 1.072-.92 1.927-2.42 2.15-3.79.035-.241.076-.487.094-.557.017-.106.076-.13.363-.153.604-.058 1.078-.38 1.365-.925.123-.235.141-.346.141-.938s-.018-.703-.14-.938c-.165-.316-.387-.568-.604-.68l-.164-.087V8.092c0-1.822-.059-2.22-.498-3.305-.041-.094.193-.1 4.447-.1h4.488v7.5zM5.766 6.06c.21.146.421.28.474.31.082.047.082.07-.011.258-.088.164-.112.404-.135 1.36-.03 1.136-.035 1.165-.17 1.277-.094.076-.229.111-.451.111h-.317V8.039c0-1.166.041-1.752.153-2.139.017-.052.04-.1.058-.1.012 0 .194.118.399.259zm10.423.726l.188.188.03 1.16c.023.972.046 1.19.14 1.377.117.24.586.685.72.685.077 0 .083.24.065 1.682-.023 1.482-.041 1.74-.152 2.133-.575 2.092-2.121 3.615-4.207 4.136-.616.153-1.957.141-2.584-.023-2.063-.545-3.563-2.033-4.131-4.113-.112-.393-.13-.65-.153-2.133-.017-1.441-.011-1.682.065-1.682.135 0 .603-.445.72-.685.094-.188.118-.405.141-1.377.018-.65.053-1.178.088-1.213.041-.035.182-.006.41.094a7.201 7.201 0 002.051.468c1.482.088 4.518-.369 5.537-.832.135-.058.322-.082.545-.07.293.018.37.047.527.205zm-11.033 4.47v.95l-.27-.035a.658.658 0 01-.456-.211c-.176-.176-.182-.2-.182-.703 0-.475.012-.54.147-.68.175-.193.316-.258.574-.258l.187-.005v.943zm13.852-.714c.176.176.181.2.181.709 0 .51-.005.533-.181.709a.658.658 0 01-.457.21l-.27.036v-1.91l.27.035c.199.018.322.076.457.211zm-8.754 8.496c1.271.299 2.69.194 3.873-.287l.393-.158.029.357c.017.194.03.358.023.363-.006 0-.65.487-1.43 1.073l-1.423 1.06-1.418-1.06c-.785-.586-1.43-1.073-1.436-1.073a3.32 3.32 0 01.024-.363l.029-.357.393.158c.21.088.638.217.943.287zm-.738 1.922c.726.539 1.318 1.002 1.324 1.02 0 .04-1.272.814-1.342.814-.035 0-1.611-1.84-1.805-2.11-.052-.076-.029-.158.147-.427.117-.182.246-.322.287-.305.035.012.662.469 1.389 1.008zm6.082-.703c.175.27.199.351.146.428-.193.27-1.77 2.109-1.804 2.109-.07 0-1.342-.773-1.342-.814.005-.041 2.695-2.057 2.748-2.057.017 0 .134.152.252.334zm-7.834 1.98c.668.803 1.265 1.512 1.33 1.565a.453.453 0 00.263.105c.118 0 .141.024.106.1a1.961 1.961 0 00-.07.322c-.03.2-.012.24.193.428l.223.205-.188.95c-.1.515-.193.954-.205.966-.041.035-.979-.275-1.43-.48a7.069 7.069 0 01-1.957-1.372c-.832-.843-1.265-1.752-1.324-2.789-.012-.287-.006-.633.024-.756l.052-.228.844-.252c.469-.14.867-.246.885-.24.023.006.586.668 1.254 1.476zM17.812 21l.85.252.047.229c.03.122.035.468.023.755-.105 1.963-1.71 3.686-4.189 4.512-.27.088-.498.146-.516.129a12.913 12.913 0 01-.21-.967l-.188-.95.223-.204c.205-.188.222-.229.193-.428a1.968 1.968 0 00-.07-.322c-.035-.082-.012-.1.117-.1.193 0 .17.024 1.64-1.746.645-.78 1.184-1.418 1.202-1.412.017 0 .41.111.878.252zM3.896 23.203c.229.897.78 1.817 1.524 2.555 3.176 3.146 9.422 3.146 12.598 0 .55-.551.89-1.026 1.2-1.7.3-.632.417-1.107.464-1.869l.035-.632.48.24c.85.422 1.617 1.265 1.987 2.168.275.685.316 1.078.316 3.17v1.927H.938v-1.927c0-2.04.04-2.45.287-3.117.357-.95 1.224-1.864 2.191-2.309l.305-.146.035.632c.023.346.088.797.14 1.008zm8.373-.299l.458.282.164.503.164.504-.668.504-.668.498-.668-.498-.668-.504.164-.504.164-.503.457-.282c.258-.158.504-.281.55-.281.048 0 .294.123.552.281zm-1.136 3.024c.27.199.486.322.586.322.1 0 .316-.123.586-.322.234-.176.445-.323.468-.323.018 0 .1.317.17.71.106.538.123.72.07.773-.099.1-2.49.1-2.59 0-.052-.053-.034-.235.071-.774.07-.392.152-.709.17-.709.024 0 .234.147.469.323z" /></svg>`,
	},
	{
		id: 4,
		count: 100,
		symbol: `%`,
		title: `Satisfaction Rate`,
		icon: `<svg fill="none" viewBox="0 0 30 28"><path fill="#0D5FF9" d="M14.535.895c-.105.094-.316.422-.51.81-.176.357-.328.656-.334.662 0 0-.31.052-.68.105-.98.147-1.296.346-1.302.844-.006.323.135.546.686 1.08l.493.48-.112.586c-.181.944-.14 1.214.211 1.49.282.222.622.17 1.366-.2l.645-.328.663.334c.75.375.996.399 1.366.117.322-.246.363-.48.217-1.307l-.123-.692.527-.534c.58-.586.716-.832.634-1.19-.094-.428-.358-.557-1.49-.71l-.475-.07-.345-.68c-.4-.78-.58-.95-1.003-.95a.607.607 0 00-.434.153zm.739 1.384c.428.867.51.92 1.477 1.05.293.034.54.081.54.099 0 .017-.223.258-.493.54-.598.603-.615.673-.463 1.541.065.346.094.628.076.628-.023 0-.293-.13-.592-.294-.739-.392-.88-.387-1.642.012-.322.164-.592.287-.603.276-.012-.012.029-.3.088-.64.158-.855.134-.914-.481-1.553l-.516-.534.68-.093c.451-.065.727-.13.832-.206.083-.058.3-.392.475-.738.176-.346.329-.628.335-.628.011 0 .14.247.287.54zM8.233 3.158c-.258.14-.405.34-.71.938-.175.352-.328.633-.345.633-.135 0-1.273.194-1.413.235-.44.146-.663.656-.464 1.061.053.111.323.428.598.704l.499.51-.094.557c-.14.815-.13 1.05.064 1.278.176.205.458.346.704.346.088.006.457-.147.815-.329l.645-.334.633.334c.856.446 1.231.446 1.542-.017.164-.247.176-.569.041-1.308l-.1-.522.528-.539c.604-.616.727-.868.604-1.237-.123-.37-.37-.504-1.208-.64l-.739-.122-.31-.622c-.37-.738-.622-.996-.956-.996a.859.859 0 00-.334.07zm.645 1.589c.357.721.469.797 1.366.92.328.041.598.094.598.118 0 .023-.223.252-.493.516-.598.574-.627.65-.48 1.53.052.334.082.621.07.633-.012.018-.281-.106-.592-.27-.745-.393-.862-.393-1.624 0-.323.164-.598.282-.616.27-.012-.018.018-.252.065-.522.181-.973.134-1.137-.551-1.741-.223-.2-.41-.387-.41-.41 0-.024.263-.083.585-.124.903-.111 1.02-.187 1.402-.95.176-.345.334-.615.351-.597.018.017.17.299.329.627zM21.043 3.272c-.152.1-.293.3-.527.763-.176.34-.34.639-.358.656-.018.018-.317.076-.674.123-.974.147-1.314.364-1.314.85 0 .282.153.516.692 1.067l.499.516-.094.546c-.176.961-.112 1.348.252 1.536.334.176.645.117 1.33-.24l.634-.335.645.334c.715.37.932.405 1.26.206.44-.27.499-.493.346-1.384l-.117-.68.493-.504c.686-.698.815-.997.592-1.42-.123-.245-.452-.374-1.243-.498l-.663-.1-.316-.62c-.381-.769-.51-.898-.92-.933-.253-.018-.347.006-.517.117zm.786 1.448c.293.58.346.651.575.757.14.064.51.146.826.187.31.041.569.088.569.112 0 .017-.229.258-.504.54-.593.597-.622.685-.464 1.547.053.31.088.58.07.592-.017.018-.286-.1-.597-.264-.745-.392-.862-.392-1.624 0-.323.165-.598.288-.61.276-.012-.018.018-.246.064-.522.135-.75.118-.99-.076-1.26a4.404 4.404 0 00-.527-.54c-.2-.176-.364-.334-.364-.357 0-.024.264-.083.586-.124.903-.111 1.015-.187 1.407-.95.176-.345.329-.633.335-.633.011 0 .158.288.334.64zM26.29 8.49c-.141.117-.335.416-.54.833-.176.357-.328.656-.334.662 0 0-.31.053-.68.106-.75.111-1.067.24-1.202.498-.106.2-.117.54-.024.721.036.07.3.364.587.657l.521.527-.128.733c-.124.71-.124.74-.018.956a.844.844 0 00.698.492c.21.024.34-.017.908-.304l.669-.335.627.329c.504.264.686.328.903.328.358 0 .58-.123.704-.375.117-.252.117-.446-.018-1.226l-.106-.633.434-.393c.551-.498.745-.809.704-1.131-.053-.41-.3-.663-.727-.756a24.463 24.463 0 00-.721-.118l-.499-.064-.369-.727c-.281-.557-.41-.756-.563-.844-.293-.182-.574-.159-.827.064zm1.266 2.234c.105.076.375.14.832.205l.68.094-.515.533c-.346.358-.528.593-.552.716-.017.1.012.469.07.82.065.346.1.645.089.657-.006.012-.282-.117-.604-.281-.768-.393-.903-.393-1.63 0-.305.164-.569.281-.586.264-.018-.018.011-.323.07-.675.129-.82.105-.903-.498-1.5-.258-.259-.47-.481-.47-.505 0-.017.247-.07.546-.105.961-.13 1.044-.182 1.477-1.062l.276-.55.334.638c.182.352.399.692.48.75zM2.987 8.427c-.258.106-.417.305-.739.944-.176.352-.328.633-.346.633-.012 0-.31.041-.657.094-.72.106-1.026.246-1.16.528-.206.44-.047.832.586 1.419l.463.422-.1.633c-.123.762-.123.956-.017 1.213.117.276.34.405.686.4.228-.007.404-.071.914-.34l.634-.34.644.333c.41.206.722.329.845.329.31 0 .68-.247.791-.528.088-.229.088-.281-.023-.95l-.123-.715.521-.528c.294-.293.557-.592.593-.662.164-.323 0-.798-.346-1.009-.106-.058-.47-.146-.886-.21l-.709-.106-.328-.68c-.311-.628-.352-.692-.598-.815-.282-.141-.417-.153-.645-.065zm.615 1.571c.293.58.352.657.575.757.135.064.504.146.82.187.311.041.57.088.57.106 0 .017-.223.258-.493.54-.287.292-.516.574-.54.674-.023.1 0 .445.06.809.058.351.087.65.075.668-.017.012-.281-.106-.586-.27-.727-.393-.85-.393-1.63 0-.328.159-.604.288-.615.27-.012-.012.017-.24.064-.516.111-.616.111-.95.006-1.155-.047-.088-.282-.352-.528-.592a5.1 5.1 0 01-.434-.446c.012-.006.317-.053.686-.105.856-.123.938-.188 1.325-.974.159-.322.294-.592.305-.592.006 0 .159.288.34.64zM15.081 9.764c-.428.146-.686.363-.867.733-.141.287-.165.422-.206 1.19-.047.926-.158 1.378-.451 1.894-.246.422-.927 1.078-1.806 1.747-.451.34-.985.762-1.184.938l-.37.316v-.527c0-.827.165-.774-2.468-.774-2.146 0-2.158 0-2.28.129-.112.123-.118.193-.118 2.48v2.357l.135.123c.182.17.422.164.598-.018l.146-.14V16.16h3.108v10.085H6.21V21.842l-.146-.141c-.182-.188-.434-.194-.604-.012-.129.135-.129.152-.129 2.656v2.527l.135.123c.135.129.158.129 2.304.129h2.175l.123-.135c.106-.111.13-.205.13-.498v-.358l.222.03c.446.064 1.003.263 1.308.468.72.487.598.464 2.433.481l1.653.018.123-.158c.159-.206.159-.329-.017-.534l-.141-.164-1.548-.03-1.542-.029-.281-.193c-.546-.381-1.185-.622-1.988-.745l-.223-.035v-3.705l.006-3.706.159-.187c.252-.288.85-.798 1.723-1.46 1.044-.792 1.501-1.196 1.865-1.66.633-.791.873-1.483.932-2.702.035-.663.064-.886.146-1.009.206-.31.768-.357 1.027-.082.134.147.299.645.445 1.401.135.68.14.686.34.774.223.094.463.024.569-.176.088-.158.023-.604-.205-1.477-.17-.645-.305-.92-.57-1.173-.421-.41-.972-.521-1.553-.316z" /><path fill="#0D5FF9" d="M16.898 14.063c-.164.076-.217.234-.328.955a7.823 7.823 0 01-.24 1.026c-.13.37-.153.546-.153 1.097 0 1.067-.176 1.6-.68 2.11-.329.323-.756.528-1.349.628-.498.088-.61.176-.61.475 0 .305.176.41.628.393.727-.024 1.577-.434 2.07-.997.527-.592.75-1.179.803-2.11l.035-.599h1.208l-.088.205c-.112.27-.106.88.017 1.238.065.199.2.386.423.61l.328.322-.147.293c-.21.416-.2.99.018 1.419.088.17.14.31.111.31-.03 0-.158.094-.293.206-.803.691-.715 2.11.176 2.69l.147.095-.13.263c-.228.44-.24.815-.058 1.42.041.122.03.122-.698.146-.662.017-.75.03-.862.146-.17.17-.164.475.012.616.111.1.323.105 2.539.105h2.41l.293-.14c.838-.399 1.225-1.407.856-2.246l-.135-.299.275-.252c.294-.27.458-.54.528-.873a2.063 2.063 0 00-.094-1.12l-.129-.293.14-.1c.67-.463.916-1.419.558-2.146a2.059 2.059 0 00-.422-.551l-.258-.235.129-.281c.094-.205.129-.405.129-.698.006-.686-.328-1.22-.98-1.565-.246-.135-.269-.135-3.054-.153l-2.802-.017.035-.13c.1-.328.27-1.3.27-1.512 0-.17-.042-.275-.147-.375-.153-.158-.276-.176-.48-.076zm5.84 3.084c.58.293.615 1.037.07 1.4-.194.13-.235.136-1.735.136-1.501 0-1.542-.006-1.736-.135-.545-.364-.51-1.108.07-1.401.176-.094.387-.106 1.666-.106 1.278 0 1.489.012 1.665.106zm.557 2.497c.545.229.656.927.205 1.36l-.176.17-1.6.018c-1.584.018-1.595.018-1.795-.117-.55-.364-.51-1.132.07-1.413.264-.135 2.99-.147 3.296-.018zm-.727 2.475c.263.052.568.363.615.627.059.299 0 .48-.234.733l-.194.217h-3.347l-.177-.17c-.216-.212-.322-.505-.275-.774.047-.229.375-.587.575-.628.216-.04 2.831-.046 3.037-.005zm-.47 2.58c.282.11.47.357.51.662.036.27-.076.516-.34.733l-.187.158-1.044-.018-1.043-.017-.176-.17c-.452-.434-.352-1.085.2-1.331.322-.147 1.723-.159 2.08-.018zM7.236 18.006c-.14.135-.146.176-.146.868 0 .68.006.733.135.85.193.182.469.17.621-.023.112-.14.123-.235.123-.856 0-.663-.006-.704-.146-.839a.483.483 0 00-.293-.146.483.483 0 00-.294.146z" /></svg>`,
	},

]

export default function CounterHomeOne() {
	return (
		<>
			<section className="counter-up section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12 wow fadeInUp">
							<div className="counter-title text-center">
								<h2>Our <span></span> Achievements</h2>
							</div>
						</div>
						{counter_data.map((item, i) => (
							<div key={i} className="col-xl-3 col-md-6 col-12 wow fadeIn">
								<div className="counter-item">
									<div className="cicon" dangerouslySetInnerHTML={{ __html: item.icon }}>
										 
									</div>
									<h4> 
										<Count number={item.count} text={item.symbol} />
										</h4>
									<p>
										{item.title}
									</p>
								</div>
							</div>
						))} 
					</div>
				</div>
			</section>
		</>
	)
}
