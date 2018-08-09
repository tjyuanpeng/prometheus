# Icon

@author: 胡钺、清烛

@description:

	ICON-FONT：根据 ICON库视觉实现 [ICONFONT](http://www.iconfont.cn/repositories/2690)
	ICON-SPRITES：提供ICONFONT没办法支持的那些图标需要使用ICON-SPRITES支持,未来新增图标继续向里面合图并保持最新psd源文件

## 注意
因为 alpha-icon 组件(或者说国际站 icon 体系)仍在发展变化当中,所以这个文档不是绝对稳定的. 对 icon 使用者,我们会尽力提供稳定可靠的服务;对 icon 开发者,需要注意维护这里的文档,当开发流程有所变化时,要及时更新这个文档.

**特殊图标如 国旗、SVG Sprites 需要直接引用相应的 CSS 代码，不需要引用 icon.css**

## 我是使用者

目前 [Spring平台](http://spring.alibaba-inc.com/alpha-icon/master/examples/icon-sprite.md) 上有 alpha-icon 的完整文档,可以在上面找到你要用的 icon 以及相应的 CSS class. 但由于 icon 组件的特殊性,未来会有更适合 icon 组件,更方便查找和使用 icon 的专用平台.

## 我是开发者

#### svg sprites 维护指南

1. 把 64px 和 96px 的 svg 源文件分别放置到 src/svg/raw/64px/ 和 src/svg/raw/96px/ , 文件名允许英文字母、中划线、下划线。

2. 在 src/svg/ 目录执行 `node rename.js`，会把 src/svg/raw/ 目录下的 svg 源文件拷贝到 src/svg/renamed/ 目录，并且根据特定规则重命名。

3. 在 src/svg/ 目录执行 `node build.js`，会调用 svg-sprite 模块构建 svg sprites 和 css，构建结果在 src/svg/build/ 目录。**把构建出的 svg 文件（原文件名应该会有一段哈希）拷贝一份重命名为 sprite.svg** —— 和 scss 文件里的引用保持一致，且如果不重命名可能导致线上访问不到。

4. 根据 build 结果的 css 文件，修改 src/icon-svg-sprite.scss 里相应 icon 的 css 属性。通常需要修改 background-size 和 background-position。可以根据 example 页面的展示效果微调。

## ICON 设计与开发流程

使用下面这个流程，我们可以畅快的使用ICON

1. **在一个业务项目开始时，需要提醒视觉设计师设计项目需要的 ICON 。**
设计师需要关注项目中需要哪些 ICON ，和柏刚确认哪些ICON可以使用现成的，哪些ICON还需要去设计。
然后按照 柏刚 的要求设计所需的 ICON 即可。
（建议业务组同学将业务线通用的 ICON 一次性的设计出来统一添加，这样以后用起来就爽啦）

2.  **胡钺 同学将 ICON 更新到alpha-icon组件中。**
胡钺 同学以后会将这个流程变成高大上的自动化流程，设计师上传完ICON稿，直接生成对应的alpha-icon组件！
甚至提供业务线构建自己ICON库的能力支撑。

3.  **业务项目组同学使用。**
业务同学进入开发，发现alpha-icon中已经有要使用的ICON了，就可以畅快的使用ICON开发了


## 支付业务图标使用与开发规范

    @author: 清烛
    支付业务图标(svg格式)专门生成一份sprite文件，需要升级@alife/alpha-icon 2.30.0 以上版本

### 使用
    1. @import "@alife/alpha-icon/icon-svg-sprite";

    2. <i class="ui2-icon-svg-payment ui2-icon-svg-payment-[size] ui2-icon-svg-payment-[name]"></i>
    size: (xs:16px, s:24px, m:32px, l:48px, xl:64px)
    name: 图标名词，如visa、e-checking、mastercard

### 开发(加入新的支付图标)
    1. 将设计师给到的svg图标(要求默认高度是16px)，以  [name].svg 的命名方式，存储在 /src/svg-payment/raw/16px/下
    2. 该项目根目录下执行 gulp svgSpritePayment
