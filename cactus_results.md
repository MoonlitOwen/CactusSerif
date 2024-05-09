## FontBakery report

fontbakery version: 0.12.5



## Experimental checks

These won't break the CI job for now, but will become effective after some time if nobody raises any concern.


<details><summary>[1] CactusClassicalSerif-Regular.ttf</summary>
<div>
<details>
    <summary>⚠️ <b>WARN</b> Validate location, size and resolution of article images. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.article.html#"></a></summary>
    <div>


> 
> The purpose of this check is to ensure images (either raster or vector files)
> are placed on the correct directory (an `images` subdirectory inside `article`) and
> they they are not excessively large in filesize and resolution.
> 
> These constraints are loosely based on infrastructure limitations under
> default configurations.
> 




> Original proposal: https://github.com/fonttools/fontbakery/issues/4594





* ⚠️ **WARN** <p>Family metadata at /Users/aaronbell/Documents/LocalProjects/GF_CJK_2024_Q2/CactusSerif/fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>
</div>
</details>




## All other checks



<details><summary>[15] CactusClassicalSerif-Regular.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.glyphset.html#"></a></summary>
    <div>


> 
> This check uses a heuristic to determine which GF glyphsets a font supports.
> Then it checks the font for correct shaping behaviour for all languages in
> those glyphsets.
> 




> Original proposal: https://github.com/googlefonts/fontbakery/issues/4147





* 🔥 **FAIL** <p>GF_Cyrillic_Core glyphset:</p>
<table>
<thead>
<tr>
<th align="left">Language</th>
<th align="left">FAIL messages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">ru_Cyrl (Russian)</td>
<td align="left">Some mark glyphs were missing: ◌̈</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* 🔥 **FAIL** <p>GF_Cyrillic_Core glyphset:</p>
<table>
<thead>
<tr>
<th align="left">Language</th>
<th align="left">FAIL messages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">uk_Cyrl (Ukrainian)</td>
<td align="left">Some base glyphs were missing: ʼ, є, і, ї, ґ</td>
</tr>
<tr>
<td align="left">^</td>
<td align="left">Some mark glyphs were missing: ◌̈</td>
</tr>
<tr>
<td align="left">^</td>
<td align="left">Shaper produced a .notdef</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* 🔥 **FAIL** <p>GF_Cyrillic_Core glyphset:</p>
<table>
<thead>
<tr>
<th align="left">Language</th>
<th align="left">FAIL messages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">sr_Cyrl (Serbian)</td>
<td align="left">Some base glyphs were missing: ђ, ј, љ, њ, ћ, џ</td>
</tr>
<tr>
<td align="left">^</td>
<td align="left">Shaper produced a .notdef</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* 🔥 **FAIL** <p>GF_Cyrillic_Core glyphset:</p>
<table>
<thead>
<tr>
<th align="left">Language</th>
<th align="left">FAIL messages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">be_Cyrl (Belarusian)</td>
<td align="left">Some base glyphs were missing: і</td>
</tr>
<tr>
<td align="left">^</td>
<td align="left">Some mark glyphs were missing: ◌̈</td>
</tr>
<tr>
<td align="left">^</td>
<td align="left">Shaper produced a .notdef</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* 🔥 **FAIL** <p>GF_Cyrillic_Core glyphset:</p>
<table>
<thead>
<tr>
<th align="left">Language</th>
<th align="left">FAIL messages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">bs_Cyrl (Bosnian (Cyrillic))</td>
<td align="left">Some base glyphs were missing: Ђ, Ј, Љ, Њ, Ћ, Џ, ђ, ј, љ, њ, ћ, џ</td>
</tr>
<tr>
<td align="left">^</td>
<td align="left">Shaper produced a .notdef</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Cyrillic_Core glyphset:</p>
<table>
<thead>
<tr>
<th align="left">Language</th>
<th align="left">WARN messages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">uk_Cyrl (Ukrainian)</td>
<td align="left">Some auxiliary glyphs were missing: ʼ, є, і, ї, ґ</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



* ⚠️ **WARN** <p>GF_Cyrillic_Core glyphset:</p>
<table>
<thead>
<tr>
<th align="left">Language</th>
<th align="left">WARN messages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">sr_Cyrl (Serbian)</td>
<td align="left">Some auxiliary glyphs were missing: ђ, ј, љ, њ, ћ, џ</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



* ⚠️ **WARN** <p>GF_Cyrillic_Core glyphset:</p>
<table>
<thead>
<tr>
<th align="left">Language</th>
<th align="left">WARN messages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">be_Cyrl (Belarusian)</td>
<td align="left">Some auxiliary glyphs were missing: і</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure files are not too large. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#"></a></summary>
    <div>


> 
> Serving extremely large font files on Google Fonts causes usability issues.
> This check ensures that file sizes are reasonable.
> 




> Original proposal: https://github.com/fonttools/fontbakery/issues/3320





* 🔥 **FAIL** <p>Font file is 26.8Mb, larger than limit 9.0Mb</p>
 [code: massive-font]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check Google Fonts glyph coverage. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.glyphset.html#"></a></summary>
    <div>


> 
> Google Fonts expects that fonts in its collection support at least the minimal
> set of characters defined in the `GF-latin-core` glyph-set.
> 




> Original proposal: https://github.com/fonttools/fontbakery/pull/2488





* 🔥 **FAIL** <p>Missing required codepoints:</p>
<pre><code>- 0x0104 (LATIN CAPITAL LETTER A WITH OGONEK)


- 0x0105 (LATIN SMALL LETTER A WITH OGONEK)


- 0x0106 (LATIN CAPITAL LETTER C WITH ACUTE)


- 0x0107 (LATIN SMALL LETTER C WITH ACUTE)


- 0x010A (LATIN CAPITAL LETTER C WITH DOT ABOVE)


- 0x010B (LATIN SMALL LETTER C WITH DOT ABOVE)


- 0x010C (LATIN CAPITAL LETTER C WITH CARON)


- 0x010D (LATIN SMALL LETTER C WITH CARON)


- 0x010E (LATIN CAPITAL LETTER D WITH CARON)


- 0x010F (LATIN SMALL LETTER D WITH CARON)


- 79 more.
</code></pre>
<p>Use -F or --full-lists to disable shortening of long lists.</p>
 [code: missing-codepoints]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does GPOS table have kerning information? This check skips monospaced fonts as defined by post.isFixedPitch value <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.gpos.html#"></a></summary>
    <div>


> 
> Well-designed fonts use kerning to improve the spacing between
> specific pairs of glyphs. This check ensures that the font has
> kerning information in the GPOS table. It can be ignored if the
> design or writing system does not require kerning.
> 




> Original proposal: legacy:check/063





* ⚠️ **WARN** <p>GPOS table lacks kerning information.</p>
 [code: lacks-kern-info]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain chws and vchw features? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#"></a></summary>
    <div>


> 
> The W3C recommends the addition of chws and vchw features to CJK fonts
> to enhance the spacing of glyphs in environments which do not fully support
> JLREQ layout rules.
> 
> The chws_tool utility (https://github.com/googlefonts/chws_tool) can be used
> to add these features automatically.
> 




> Original proposal: https://github.com/fonttools/fontbakery/issues/3363





* ⚠️ **WARN** <p>chws feature not found in font. Use chws_tool (<a href="https://github.com/googlefonts/chws_tool">https://github.com/googlefonts/chws_tool</a>) to add it.</p>
 [code: missing-chws-feature]



* ⚠️ **WARN** <p>vchw feature not found in font. Use chws_tool (<a href="https://github.com/googlefonts/chws_tool">https://github.com/googlefonts/chws_tool</a>) to add it.</p>
 [code: missing-vchw-feature]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#"></a></summary>
    <div>


> 
> Visually QAing thousands of glyphs by hand is tiring. Most glyphs can only
> be constructured in a handful of ways. This means a glyph's contour count
> will only differ slightly amongst different fonts, e.g a 'g' could either
> be 2 or 3 contours, depending on whether its double story or single story.
> 
> However, a quotedbl should have 2 contours, unless the font belongs
> to a display family.
> 
> This check currently does not cover variable fonts because there's plenty
> of alternative ways of constructing glyphs with multiple outlines for each
> feature in a VarFont. The expected contour count data for this check is
> currently optimized for the typical construction of glyphs in static fonts.
> 




> Original proposal: legacy:check/153





* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni210A	Contours detected: 3	Expected: 2

- Glyph name: uni21B9	Contours detected: 2	Expected: 4

- Glyph name: uni2552	Contours detected: 1	Expected: 2

- Glyph name: uni2553	Contours detected: 1	Expected: 2

- Glyph name: uni2555	Contours detected: 1	Expected: 2

- Glyph name: uni2556	Contours detected: 1	Expected: 2

- Glyph name: uni2558	Contours detected: 1	Expected: 2

- Glyph name: uni2559	Contours detected: 1	Expected: 2

- Glyph name: uni255B	Contours detected: 1	Expected: 2

- Glyph name: uni255C	Contours detected: 1	Expected: 2

- 14 more.
</code></pre>
<p>Use -F or --full-lists to disable shortening of long lists.</p>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#"></a></summary>
    <div>


> 
> It is a common practice to have math signs sharing the same width
> (preferably the same width as tabular figures accross the entire font family).
> 
> This probably comes from the will to avoid additional tabular math signs
> knowing that their design can easily share the same width.
> 




> Original proposal: https://github.com/fonttools/fontbakery/issues/3832





* ⚠️ **WARN** <p>The most common width is 1000 among a set of 43 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 576:
plus, minus, equal, logicalnot, greater, less</p>
<p>Width = 840:
uni3012</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Glyph names are all valid? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#"></a></summary>
    <div>


> 
> Microsoft's recommendations for OpenType Fonts states the following:
> 
> 'NOTE: The PostScript glyph name must be no longer than 31 characters,
> include only uppercase or lowercase English letters, European digits,
> the period or the underscore, i.e. from the set `[A-Za-z0-9_.]` and
> should start with a letter, except the special glyph name `.notdef`
> which starts with a period.'
> 
> https://learn.microsoft.com/en-us/typography/opentype/otspec181/recom#-post--table
> 
> 
> In practice, though, particularly in modern environments, glyph names
> can be as long as 63 characters.
> 
> According to the "Adobe Glyph List Specification" available at:
> 
> https://github.com/adobe-type-tools/agl-specification
> 




> Original proposal: legacy:check/058
> See also: https://github.com/fonttools/fontbakery/issues/2832





* ⚠️ **WARN** <p>The following glyph names may be too long for some legacy systems which may expect a maximum 31-characters length limit:
cjkcompatibilityideograph2f804hani, cjkcompatibilityideograph2f80fhani, cjkcompatibilityideograph2f815hani, cjkcompatibilityideograph2f81ahani, cjkcompatibilityideograph2f822hani, cjkcompatibilityideograph2f828hani, cjkcompatibilityideograph2f833hani, cjkcompatibilityideograph2f83fhani, cjkcompatibilityideograph2f846hani, cjkcompatibilityideograph2f852hani and 384 more.</p>
<p>Use -F or --full-lists to disable shortening of long lists.</p>
 [code: legacy-long-names]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/outline.html#"></a></summary>
    <div>


> 
> This check heuristically detects outline segments which form a particularly
> small angle, indicative of an outline error. This may cause false positives
> in cases such as extreme ink traps, so should be regarded as advisory and
> backed up by manual inspection.
> 




> Original proposal: https://github.com/fonttools/fontbakery/issues/3064





* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* cjkcompatibilityideograph2f86dhani (U+2F86D): B&lt;&lt;635.0,456.0&gt;-&lt;615.0,443.0&gt;-&lt;577.0,438.0&gt;&gt;/L&lt;&lt;577.0,438.0&gt;--&lt;745.0,438.0&gt;&gt; = 7.495857639729838

* cjkcompatibilityideograph2f8d3hani (U+2F8D3): L&lt;&lt;766.0,555.0&gt;--&lt;386.0,555.0&gt;&gt;/L&lt;&lt;386.0,555.0&gt;--&lt;441.0,543.0&gt;&gt; = 12.308015817427924

* cjkcompatibilityideograph2f921hani (U+2F921): B&lt;&lt;332.0,634.0&gt;-&lt;328.0,610.0&gt;-&lt;307.0,607.0&gt;&gt;/L&lt;&lt;307.0,607.0&gt;--&lt;612.0,607.0&gt;&gt; = 8.13010235415596

* cjkcompatibilityideograph2f921hani (U+2F921): L&lt;&lt;200.0,607.0&gt;--&lt;299.0,607.0&gt;&gt;/B&lt;&lt;299.0,607.0&gt;-&lt;288.0,609.0&gt;-&lt;278.0,617.0&gt;&gt; = 10.304846468766044

* cjkcompatibilityideographf910hani (U+F910): L&lt;&lt;422.0,224.0&gt;--&lt;412.0,232.0&gt;&gt;/B&lt;&lt;412.0,232.0&gt;-&lt;435.0,204.0&gt;-&lt;434.0,176.0&gt;&gt; = 11.939531082430465

* cjkcompatibilityideographf91dhani (U+F91D): B&lt;&lt;232.0,461.0&gt;-&lt;333.0,410.0&gt;-&lt;349.0,344.0&gt;&gt;/L&lt;&lt;349.0,344.0&gt;--&lt;349.0,575.0&gt;&gt; = 13.62699485989153

* cjkcompatibilityideographf939hani (U+F939): L&lt;&lt;760.0,380.0&gt;--&lt;751.0,380.0&gt;&gt;/B&lt;&lt;751.0,380.0&gt;-&lt;832.0,365.0&gt;-&lt;883.0,332.0&gt;&gt; = 10.491477012331599

* cjkcompatibilityideographf93bhani (U+F93B): B&lt;&lt;780.0,132.0&gt;-&lt;724.0,223.0&gt;-&lt;697.0,362.0&gt;&gt;/L&lt;&lt;697.0,362.0&gt;--&lt;697.0,18.0&gt;&gt; = 10.992507580267716

* cjkcompatibilityideographf93chani (U+F93C): B&lt;&lt;781.0,130.0&gt;-&lt;727.0,220.0&gt;-&lt;703.0,361.0&gt;&gt;/L&lt;&lt;703.0,361.0&gt;--&lt;703.0,18.0&gt;&gt; = 9.65989307844234

* cjkcompatibilityideographf93dhani (U+F93D): B&lt;&lt;773.0,143.0&gt;-&lt;713.0,245.0&gt;-&lt;686.0,405.0&gt;&gt;/L&lt;&lt;686.0,405.0&gt;--&lt;686.0,20.0&gt;&gt; = 9.578422919460733

* 7015 more.
</code></pre>
<p>Use -F or --full-lists to disable shortening of long lists.</p>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/outline.html#"></a></summary>
    <div>


> 
> This check detects line segments which are nearly, but not quite, exactly
> horizontal or vertical. Sometimes such lines are created by design, but often
> they are indicative of a design error.
> 
> This check is disabled for italic styles, which often contain nearly-upright
> lines.
> 




> Original proposal: https://github.com/fonttools/fontbakery/pull/3088





* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* M (U+004D): L&lt;&lt;142.0,48.0&gt;--&lt;143.0,682.0&gt;&gt;

* M (U+004D): L&lt;&lt;738.0,334.0&gt;--&lt;739.0,635.0&gt;&gt;

* Mugrek (U+039C): L&lt;&lt;142.0,48.0&gt;--&lt;143.0,682.0&gt;&gt;

* Mugrek (U+039C): L&lt;&lt;738.0,334.0&gt;--&lt;739.0,635.0&gt;&gt;

* N (U+004E): L&lt;&lt;137.0,48.0&gt;--&lt;138.0,672.0&gt;&gt;

* N (U+004E): L&lt;&lt;183.0,609.0&gt;--&lt;184.0,49.0&gt;&gt;

* N (U+004E): L&lt;&lt;617.0,150.0&gt;--&lt;616.0,680.0&gt;&gt;

* N (U+004E): L&lt;&lt;662.0,681.0&gt;--&lt;661.0,-8.0&gt;&gt;

* Nacute (U+0143): L&lt;&lt;137.0,48.0&gt;--&lt;138.0,672.0&gt;&gt;

* Nacute (U+0143): L&lt;&lt;183.0,609.0&gt;--&lt;184.0,49.0&gt;&gt;

* 1998 more.
</code></pre>
<p>Use -F or --full-lists to disable shortening of long lists.</p>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check the direction of the outermost contour in each glyph <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/outline.html#"></a></summary>
    <div>


> 
> In TrueType fonts, the outermost contour of a glyph should be oriented
> counter-clockwise, while the inner contours should be oriented clockwise.
> Getting the path direction wrong can lead to rendering issues in some
> software.
> 




> Original proposal: https://github.com/fonttools/fontbakery/issues/2056





* ⚠️ **WARN** <p>The following glyphs have a counter-clockwise outer contour:</p>
<pre><code>* cjkcompatibilityideographf90fhani (U+F90F) has a counter-clockwise outer contour

* cjkcompatibilityideographf922hani (U+F922) has a counter-clockwise outer contour

* cjkcompatibilityideographf923hani (U+F923) has a counter-clockwise outer contour

* cjkcompatibilityideographf94ahani (U+F94A) has a counter-clockwise outer contour

* cjkcompatibilityideographfa5chani (U+FA5C) has a counter-clockwise outer contour

* glyph10550 (U+55AB) has a counter-clockwise outer contour

* glyph10585 (U+55CE) has a counter-clockwise outer contour

* glyph10592 (U+55D5) has a counter-clockwise outer contour

* glyph10606 (U+55E3) has a counter-clockwise outer contour

* glyph10606 (U+55E3) has a counter-clockwise outer contour

* 5551 more.
</code></pre>
<p>Use -F or --full-lists to disable shortening of long lists.</p>
 [code: ccw-outer-contour]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/shaping.html#"></a></summary>
    <div>


> 
> An accent placed on characters with a "soft dot", like i or j, causes
> the dot to disappear.
> An explicit dot above can be added where required.
> See "Diacritics on i and j" in Section 7.1, "Latin" in The Unicode Standard.
> 
> Characters with the Soft_Dotted property are listed in
> https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
> 
> See also:
> https://googlefonts.github.io/gf-guide/diacritics.html#soft-dotted-glyphs
> 




> Original proposal: https://github.com/fonttools/fontbakery/issues/4059





* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̋ i̍ j̀ j́ j̄ ɨ̀ ɨ́ ɨ̂ ɨ̄ ɨ̋ ɨ̌ ị̀ ị́ ị̂ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: i⃝̀ i⃝́ i⃝̂ i⃝̄ i⃝̆ i⃝̋ i⃝̌ i⃝̍ i⃞̀ i⃞́ i⃞̂ i⃞̄ i⃞̆ i⃞̋ i⃞̌ i⃞̍ ĵ j̆ j̋ ǰ</p>
<p>Your font fully covers the following languages that require the soft-dotted feature: Ekpeye (Latn, 226,000 speakers).</p>
<p>Your font does <em>not</em> cover the following languages that require the soft-dotted feature: Basaa (Latn, 332,940 speakers), Avokaya (Latn, 100,000 speakers), Koonzime (Latn, 40,000 speakers), Mundani (Latn, 34,000 speakers), Ma’di (Latn, 584,000 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Ejagham (Latn, 120,000 speakers), Ngbaka (Latn, 1,020,000 speakers), Cicipu (Latn, 44,000 speakers), Aghem (Latn, 38,843 speakers), Lugbara (Latn, 2,200,000 speakers), Dan (Latn, 1,099,244 speakers), Navajo (Latn, 166,319 speakers), Mango (Latn, 77,000 speakers), Fur (Latn, 1,230,163 speakers), Nzakara (Latn, 50,000 speakers), Nateni (Latn, 100,000 speakers), Kom (Latn, 360,685 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Igbo (Latn, 27,823,640 speakers), Dutch (Latn, 31,709,104 speakers), Makaa (Latn, 221,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Yala (Latn, 200,000 speakers), Mfumte (Latn, 79,000 speakers), Dii (Latn, 71,000 speakers), Bafut (Latn, 158,146 speakers), Gulay (Latn, 250,478 speakers), Vute (Latn, 21,000 speakers), Ebira (Latn, 2,200,000 speakers), Zapotec (Latn, 490,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Lithuanian (Latn, 2,357,094 speakers), Sar (Latn, 500,000 speakers), South Central Banda (Latn, 244,000 speakers), Bete-Bendi (Latn, 100,000 speakers), Southern Kisi (Latn, 360,000 speakers).</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.subsets.html#"></a></summary>
    <div>


> 
> This check ensures that all encoded glyphs in the font are covered by a
> subset declared in the METADATA.pb. Google Fonts splits the font into
> a set of subset fonts based on the contents of the `subsets` field and
> the subset definitions in the `glyphsets` repository.
> 
> Any encoded glyphs which are not by any of these subset definitions
> will not be served in the subsetted fonts, and so will be unreachable to
> the end user.
> 




> Original proposal: https://github.com/fonttools/fontbakery/issues/4097
> See also: https://github.com/fonttools/fontbakery/pull/4273





* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi</li>
<li>U+02C9 MODIFIER LETTER MACRON: not included in any glyphset definition</li>
<li>U+02CA MODIFIER LETTER ACUTE ACCENT: not included in any glyphset definition</li>
<li>U+02CB MODIFIER LETTER GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02EA MODIFIER LETTER YIN DEPARTING TONE MARK: not included in any glyphset definition</li>
<li>U+02EB MODIFIER LETTER YANG DEPARTING TONE MARK: not included in any glyphset definition</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage
45683 more.</li>
</ul>
<p>Use -F or --full-lists to disable shortening of long lists.</p>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>chinese-hongkong</code>, <code>chinese-simplified</code>, <code>chinese-traditional</code>, <code>cyrillic</code>, <code>cyrillic-ext</code>, <code>greek-ext</code>, <code>japanese</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Combined length of family and style must not exceed 32 characters. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.name.html#"></a></summary>
    <div>


> 
> This check ensures that the length of name table entries is not
> too long, as this causes problems in some environments.
> 




> Original proposal: https://github.com/fonttools/fontbakery/issues/1488
> See also: https://github.com/fonttools/fontbakery/issues/2179





* ⚠️ **WARN** <p>Name ID 6 'CactusClassicalSerif-Regular' exceeds 27 characters. This has been found to cause problems with PostScript printers, especially on Mac platforms.</p>
 [code: nameid6-too-long]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.meta.html#"></a></summary>
    <div>


> 
> The OpenType 'meta' table originated at Apple. Microsoft added it to OT with
> just two DataMap records:
> 
> - dlng: comma-separated ScriptLangTags that indicate which scripts,
> or languages and scripts, with possible variants, the font is designed for.
> 
> - slng: comma-separated ScriptLangTags that indicate which scripts,
> or languages and scripts, with possible variants, the font supports.
> 
> 
> The slng structure is intended to describe which languages and scripts the
> font overall supports. For example, a Traditional Chinese font that also
> contains Latin characters, can indicate Hant,Latn, showing that it supports
> Hant, the Traditional Chinese variant of the Hani script, and it also
> supports the Latn script.
> 
> The dlng structure is far more interesting. A font may contain various glyphs,
> but only a particular subset of the glyphs may be truly "leading" in the design,
> while other glyphs may have been included for technical reasons. Such a
> Traditional Chinese font could only list Hant there, showing that it’s designed
> for Traditional Chinese, but the font would omit Latn, because the developers
> don’t think the font is really recommended for purely Latin-script use.
> 
> The tags used in the structures can comprise just script, or also language
> and script. For example, if a font has Bulgarian Cyrillic alternates in the
> locl feature for the cyrl BGR OT languagesystem, it could also indicate in
> dlng explicitly that it supports bul-Cyrl. (Note that the scripts and languages
> in meta use the ISO language and script codes, not the OpenType ones).
> 
> This check ensures that the font has the meta table containing the
> slng and dlng structures.
> 
> All families in the Google Fonts collection should contain the 'meta' table.
> Windows 10 already uses it when deciding on which fonts to fall back to.
> The Google Fonts API and also other environments could use the data for
> smarter filtering. Most importantly, those entries should be added
> to the Noto fonts.
> 
> In the font making process, some environments store this data in external
> files already. But the meta table provides a convenient way to store this
> inside the font file, so some tools may add the data, and unrelated tools
> may read this data. This makes the solution much more portable and universal.
> 




> Original proposal: https://github.com/fonttools/fontbakery/issues/3349





* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>
</div>
</details>




### Summary

| 💥 ERROR | ☠ FATAL | 🔥 FAIL | ⚠️ WARN | ⏩ SKIP | ℹ️ INFO | ✅ PASS | 🔎 DEBUG | 
| ---|---|---|---|---|---|---|---|
| 0 | 0 | 3 | 13 | 126 | 7 | 101 | 0 | 
| 0% | 0% | 1% | 5% | 50% | 3% | 40% | 0% | 



**Note:** The following loglevels were omitted in this report:


* SKIP
* INFO
* PASS
* DEBUG
