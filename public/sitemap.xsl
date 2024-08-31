<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output encoding='utf-8' />
  <xsl:variable name="hostname" select="'wechatpay.im'" />
  <xsl:template name="string-replace-all">
    <xsl:param name="text" />
    <xsl:param name="replace" />
    <xsl:param name="by" />
    <xsl:choose>
      <xsl:when test="contains($text, $replace)">
        <xsl:value-of select="substring-before($text,$replace)" />
        <xsl:value-of select="$by" />
          <xsl:call-template name="string-replace-all">
            <xsl:with-param name="text" select="substring-after($text,$replace)" />
            <xsl:with-param name="replace" select="$replace" />
            <xsl:with-param name="by" select="$by" />
          </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$text" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>
  <xsl:template match="/">
    <xsl:variable name="totalNum" select="count(sitemap:urlset/sitemap:url)" />
    <html xmlns="http://www.w3.org/1999/xhtml" lang="zh-Hans">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>站点地图 | <xsl:value-of select="$hostname" /></title>
        <style type="text/css">
          :root {--vp-c-bg: #fff;--vp-c-text-1: rgba(60, 60, 67);--vp-c-green-soft: rgba(16, 185, 129, .14);--vp-c-brand-1: #3451b2;--vp-c-brand-2: #3a5ccc;--vp-c-bg-soft: #f6f6f7;}
          @media screen and (prefers-color-scheme: dark) { :root {--vp-c-bg: #1b1b1f;--vp-c-text-1: rgba(255, 255, 245, .86);--vp-c-green-soft: rgba(16, 185, 129, .16);--vp-c-brand-1: #a8b1ff;--vp-c-brand-2: #5c73e7;--vp-c-bg-soft: #202127;} }
          body {color:var(--vp-c-text-1);background-color:var(--vp-c-bg)}
          ol {padding-bottom: 50px}
          ol li {padding: 8px 16px}
          ol li:nth-child(odd) { background-color: var(--vp-c-bg-soft); }
          ol li:hover { background-color: var(--vp-c-green-soft); }
          ol li a {color: var(--vp-c-brand-1);text-decoration: underline;text-underline-offset: 6px;transition: color .25s,opacity .25s}
          ol li a:hover {color: var(--vp-c-brand-2)}
        </style>
      </head>
      <body>
        <h1 title="共 {$totalNum} 个链接">站点地图</h1>
        <ol>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <xsl:sort select="sitemap:loc" />
            <li title="最后更新时间: {sitemap:lastmod}">
              <a href="{sitemap:loc}">
                <xsl:variable name="nameWithoutHostname" select="substring-after(sitemap:loc, $hostname)" />
                <xsl:variable name="namePrependZeroWidthSpaceBeforeDotChar">
                  <xsl:call-template name="string-replace-all">
                    <xsl:with-param name="text" select="$nameWithoutHostname" />
                    <xsl:with-param name="replace" select="'.'" />
                    <xsl:with-param name="by" select="'&#8203;.'" />
                  </xsl:call-template>
                </xsl:variable>
                <xsl:variable name="namePrependZeroWidthSpaceBeforeSlashChar">
                  <xsl:call-template name="string-replace-all">
                    <xsl:with-param name="text" select="$namePrependZeroWidthSpaceBeforeDotChar" />
                    <xsl:with-param name="replace" select="'/'" />
                    <xsl:with-param name="by" select="'&#8203;/'" />
                  </xsl:call-template>
                </xsl:variable>
                <xsl:variable name="nameWithUnescapedRighBrace">
                  <xsl:call-template name="string-replace-all">
                    <xsl:with-param name="text" select="$namePrependZeroWidthSpaceBeforeSlashChar" />
                    <xsl:with-param name="replace" select="'%7D'" />
                    <xsl:with-param name="by" select="'}'" />
                  </xsl:call-template>
                </xsl:variable>
                <xsl:call-template name="string-replace-all">
                  <xsl:with-param name="text" select="$nameWithUnescapedRighBrace" />
                  <xsl:with-param name="replace" select="'%7B'" />
                  <xsl:with-param name="by" select="'{'" />
 				        </xsl:call-template>
              </a>
            </li>
          </xsl:for-each>
        </ol>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
