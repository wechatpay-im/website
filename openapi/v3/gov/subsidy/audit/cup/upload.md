---
title: 上传审核数据
description: 上传审核数据
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| org_no {data-required data-indent=1} | string | 分公司机构代码
| sub_mchnt_cd {data-required data-indent=1} | string | 店铺编码
| sub_mchnt_nm {data-required data-indent=1} | string | 店铺名称
| store_nm {data-indent=1} | string | 门店名称
| online_no {data-required data-indent=1} | string | 线上平台订单号
| mchnt_order_id {data-required data-indent=1} | string | 商户订单号
| upload_time {data-required data-indent=1} | string | 审核记录上传时间
| notify_url {data-required data-indent=1} | string | 审核结果通知地址
| prod_id {data-required data-indent=1} | string | 品类
| eng_grade {data-indent=1} | string | 能效
| brand_nm {data-required data-indent=1} | string | 品牌
| prod_model {data-required data-indent=1} | string | 型号
| sales_chnl {data-indent=1} | string | 销售方式（线上或线下）
| plat_form {data-required data-indent=1} | string | 电商平台方
| payer_tp {data-required data-indent=1} | string | 支付方式类型
| trade_in_order_id {data-indent=1} | string | 收旧订单号
| trade_in_at {data-indent=1} | string | 收旧价格
| is_trade_in {data-indent=1} | string | 收旧价格是否统计
| sales_at {data-required data-indent=1} | string | 订单金额
| actual_at {data-required data-indent=1} | string | 实付金额
| trans_tm {data-required data-indent=1} | string | 交易时间
| mchnt_cd {data-required data-indent=1} | string | 商户编码
| mer_sub_at {data-indent=1} | string | 商家优惠金额
| discount_at {data-required data-indent=1} | string | 国补优惠金额
| image01 {data-indent=1} | string | 其他图片1
| image02 {data-indent=1} | string | 其他图片2
| image03 {data-indent=1} | string | 其他图片3
| image04 {data-indent=1} | string | 其他图片4
| image05 {data-indent=1} | string | 其他图片5
| image06 {data-indent=1} | string | 其他图片6
| image07 {data-indent=1} | string | 其他图片7
| image08 {data-indent=1} | string | 其他图片8
| image09 {data-indent=1} | string | 其他图片9
| image10 {data-indent=1} | string | 其他图片10
| commitment_letter_photo {data-indent=1} | string | 收旧承诺函照片
| commitment_letter_photo_format {data-indent=1} | string | 收旧承诺函照片格式
| device_photo {data-indent=1} | string | 收旧设备外观照片
| device_photo_format {data-indent=1} | string | 收旧设备外观照片格式
| pack_and_active_photo {data-indent=1} | string | 包含完整外包装及sn码的激活照片
| bar_code {data-indent=1} | string | 商品条码
| sn_code {data-required data-indent=1} | string | SN码
| imei1 {data-indent=1} | string | IMEI1
| imei2 {data-indent=1} | string | IMEI2
| register_model {data-indent=1} | string | 能效或水效网备案登记型号
| record_number {data-indent=1} | string | 能效或水效备案号
| eng_grade_standard {data-indent=1} | string | 能效或水效执行的国家标准名称
| invoice_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 发票信息
| invoice_cd {data-indent=2} | string | 发票代码
| invoice_no {data-indent=2} | string | 发票号码
| invoice_dt {data-indent=2} | string | 开票日期
| invoice_link {data-indent=2} | string | 发票链接
| invoice_tp {data-indent=2} | string | 发票类型
| invoice_ck_cd {data-indent=2} | string | 发票校验码
| nm {data-indent=2} | string | 发票上购买人姓名
| tax {data-indent=2} | string | 税价合计
| invoice_tax_amt {data-indent=2} | string | 发票税额
| sales_ent_nm {data-indent=2} | string | 销售企业名称
| tax_payer {data-indent=2} | string | 销售方纳税人识别号
| num {data-indent=2} | string | 数量
| service_nm {data-indent=2} | string | 货物或应税劳务服务名称（含型号）
| track_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 物流信息
| tracking_no {data-indent=2} | string | 物流单号
| tracking_company {data-indent=2} | string | 物流公司
| usr_prov {data-indent=2} | string | 收货省
| usr_city {data-indent=2} | string | 收货市
| usr_area {data-indent=2} | string | 收货区县
| usr_addr {data-indent=2} | string | 收货地址
| tracking_type {data-indent=2} | string | 物流类型
| delivery_method {data-indent=2} | string | 提货方式
| shipping_addr {data-indent=2} | string | 发货地址
| delivery_time {data-indent=2} | string | 签收时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->audit->cup->upload->postAsync([
  'json' => [
    'org_no'                         => '',
    'sub_mchnt_cd'                   => '',
    'sub_mchnt_nm'                   => '',
    'store_nm'                       => '',
    'online_no'                      => '',
    'mchnt_order_id'                 => '',
    'upload_time'                    => '',
    'notify_url'                     => '',
    'prod_id'                        => '',
    'eng_grade'                      => '',
    'brand_nm'                       => '',
    'prod_model'                     => '',
    'sales_chnl'                     => '',
    'plat_form'                      => '',
    'payer_tp'                       => '',
    'trade_in_order_id'              => '',
    'trade_in_at'                    => '',
    'is_trade_in'                    => '',
    'sales_at'                       => '',
    'actual_at'                      => '',
    'trans_tm'                       => '',
    'mchnt_cd'                       => '',
    'mer_sub_at'                     => '',
    'discount_at'                    => '',
    'image01'                        => '',
    'image02'                        => '',
    'image03'                        => '',
    'image04'                        => '',
    'image05'                        => '',
    'image06'                        => '',
    'image07'                        => '',
    'image08'                        => '',
    'image09'                        => '',
    'image10'                        => '',
    'commitment_letter_photo'        => '',
    'commitment_letter_photo_format' => '',
    'device_photo'                   => '',
    'device_photo_format'            => '',
    'pack_and_active_photo'          => '',
    'bar_code'                       => '',
    'sn_code'                        => '',
    'imei1'                          => '',
    'imei2'                          => '',
    'register_model'                 => '',
    'record_number'                  => '',
    'eng_grade_standard'             => '',
    'invoice_info'                   => [
      'invoice_cd'      => '',
      'invoice_no'      => '',
      'invoice_dt'      => '',
      'invoice_link'    => '',
      'invoice_tp'      => '',
      'invoice_ck_cd'   => '',
      'nm'              => '',
      'tax'             => '',
      'invoice_tax_amt' => '',
      'sales_ent_nm'    => '',
      'tax_payer'       => '',
      'num'             => '',
      'service_nm'      => '',
    ],
    'track_info'                     => [
      'tracking_no'      => '',
      'tracking_company' => '',
      'usr_prov'         => '',
      'usr_city'         => '',
      'usr_area'         => '',
      'usr_addr'         => '',
      'tracking_type'    => '',
      'delivery_method'  => '',
      'shipping_addr'    => '',
      'delivery_time'    => '',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/gov/subsidy/audit/cup/upload')->postAsync([
  'json' => [
    'org_no'                         => '',
    'sub_mchnt_cd'                   => '',
    'sub_mchnt_nm'                   => '',
    'store_nm'                       => '',
    'online_no'                      => '',
    'mchnt_order_id'                 => '',
    'upload_time'                    => '',
    'notify_url'                     => '',
    'prod_id'                        => '',
    'eng_grade'                      => '',
    'brand_nm'                       => '',
    'prod_model'                     => '',
    'sales_chnl'                     => '',
    'plat_form'                      => '',
    'payer_tp'                       => '',
    'trade_in_order_id'              => '',
    'trade_in_at'                    => '',
    'is_trade_in'                    => '',
    'sales_at'                       => '',
    'actual_at'                      => '',
    'trans_tm'                       => '',
    'mchnt_cd'                       => '',
    'mer_sub_at'                     => '',
    'discount_at'                    => '',
    'image01'                        => '',
    'image02'                        => '',
    'image03'                        => '',
    'image04'                        => '',
    'image05'                        => '',
    'image06'                        => '',
    'image07'                        => '',
    'image08'                        => '',
    'image09'                        => '',
    'image10'                        => '',
    'commitment_letter_photo'        => '',
    'commitment_letter_photo_format' => '',
    'device_photo'                   => '',
    'device_photo_format'            => '',
    'pack_and_active_photo'          => '',
    'bar_code'                       => '',
    'sn_code'                        => '',
    'imei1'                          => '',
    'imei2'                          => '',
    'register_model'                 => '',
    'record_number'                  => '',
    'eng_grade_standard'             => '',
    'invoice_info'                   => [
      'invoice_cd'      => '',
      'invoice_no'      => '',
      'invoice_dt'      => '',
      'invoice_link'    => '',
      'invoice_tp'      => '',
      'invoice_ck_cd'   => '',
      'nm'              => '',
      'tax'             => '',
      'invoice_tax_amt' => '',
      'sales_ent_nm'    => '',
      'tax_payer'       => '',
      'num'             => '',
      'service_nm'      => '',
    ],
    'track_info'                     => [
      'tracking_no'      => '',
      'tracking_company' => '',
      'usr_prov'         => '',
      'usr_city'         => '',
      'usr_area'         => '',
      'usr_addr'         => '',
      'tracking_type'    => '',
      'delivery_method'  => '',
      'shipping_addr'    => '',
      'delivery_time'    => '',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/gov/subsidy/audit/cup/upload']->postAsync([
  'json' => [
    'org_no'                         => '',
    'sub_mchnt_cd'                   => '',
    'sub_mchnt_nm'                   => '',
    'store_nm'                       => '',
    'online_no'                      => '',
    'mchnt_order_id'                 => '',
    'upload_time'                    => '',
    'notify_url'                     => '',
    'prod_id'                        => '',
    'eng_grade'                      => '',
    'brand_nm'                       => '',
    'prod_model'                     => '',
    'sales_chnl'                     => '',
    'plat_form'                      => '',
    'payer_tp'                       => '',
    'trade_in_order_id'              => '',
    'trade_in_at'                    => '',
    'is_trade_in'                    => '',
    'sales_at'                       => '',
    'actual_at'                      => '',
    'trans_tm'                       => '',
    'mchnt_cd'                       => '',
    'mer_sub_at'                     => '',
    'discount_at'                    => '',
    'image01'                        => '',
    'image02'                        => '',
    'image03'                        => '',
    'image04'                        => '',
    'image05'                        => '',
    'image06'                        => '',
    'image07'                        => '',
    'image08'                        => '',
    'image09'                        => '',
    'image10'                        => '',
    'commitment_letter_photo'        => '',
    'commitment_letter_photo_format' => '',
    'device_photo'                   => '',
    'device_photo_format'            => '',
    'pack_and_active_photo'          => '',
    'bar_code'                       => '',
    'sn_code'                        => '',
    'imei1'                          => '',
    'imei2'                          => '',
    'register_model'                 => '',
    'record_number'                  => '',
    'eng_grade_standard'             => '',
    'invoice_info'                   => [
      'invoice_cd'      => '',
      'invoice_no'      => '',
      'invoice_dt'      => '',
      'invoice_link'    => '',
      'invoice_tp'      => '',
      'invoice_ck_cd'   => '',
      'nm'              => '',
      'tax'             => '',
      'invoice_tax_amt' => '',
      'sales_ent_nm'    => '',
      'tax_payer'       => '',
      'num'             => '',
      'service_nm'      => '',
    ],
    'track_info'                     => [
      'tracking_no'      => '',
      'tracking_company' => '',
      'usr_prov'         => '',
      'usr_city'         => '',
      'usr_area'         => '',
      'usr_addr'         => '',
      'tracking_type'    => '',
      'delivery_method'  => '',
      'shipping_addr'    => '',
      'delivery_time'    => '',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->gov->subsidy->audit->cup->upload->post([
  'json' => [
    'org_no'                         => '',
    'sub_mchnt_cd'                   => '',
    'sub_mchnt_nm'                   => '',
    'store_nm'                       => '',
    'online_no'                      => '',
    'mchnt_order_id'                 => '',
    'upload_time'                    => '',
    'notify_url'                     => '',
    'prod_id'                        => '',
    'eng_grade'                      => '',
    'brand_nm'                       => '',
    'prod_model'                     => '',
    'sales_chnl'                     => '',
    'plat_form'                      => '',
    'payer_tp'                       => '',
    'trade_in_order_id'              => '',
    'trade_in_at'                    => '',
    'is_trade_in'                    => '',
    'sales_at'                       => '',
    'actual_at'                      => '',
    'trans_tm'                       => '',
    'mchnt_cd'                       => '',
    'mer_sub_at'                     => '',
    'discount_at'                    => '',
    'image01'                        => '',
    'image02'                        => '',
    'image03'                        => '',
    'image04'                        => '',
    'image05'                        => '',
    'image06'                        => '',
    'image07'                        => '',
    'image08'                        => '',
    'image09'                        => '',
    'image10'                        => '',
    'commitment_letter_photo'        => '',
    'commitment_letter_photo_format' => '',
    'device_photo'                   => '',
    'device_photo_format'            => '',
    'pack_and_active_photo'          => '',
    'bar_code'                       => '',
    'sn_code'                        => '',
    'imei1'                          => '',
    'imei2'                          => '',
    'register_model'                 => '',
    'record_number'                  => '',
    'eng_grade_standard'             => '',
    'invoice_info'                   => [
      'invoice_cd'      => '',
      'invoice_no'      => '',
      'invoice_dt'      => '',
      'invoice_link'    => '',
      'invoice_tp'      => '',
      'invoice_ck_cd'   => '',
      'nm'              => '',
      'tax'             => '',
      'invoice_tax_amt' => '',
      'sales_ent_nm'    => '',
      'tax_payer'       => '',
      'num'             => '',
      'service_nm'      => '',
    ],
    'track_info'                     => [
      'tracking_no'      => '',
      'tracking_company' => '',
      'usr_prov'         => '',
      'usr_city'         => '',
      'usr_area'         => '',
      'usr_addr'         => '',
      'tracking_type'    => '',
      'delivery_method'  => '',
      'shipping_addr'    => '',
      'delivery_time'    => '',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/audit/cup/upload')->post([
  'json' => [
    'org_no'                         => '',
    'sub_mchnt_cd'                   => '',
    'sub_mchnt_nm'                   => '',
    'store_nm'                       => '',
    'online_no'                      => '',
    'mchnt_order_id'                 => '',
    'upload_time'                    => '',
    'notify_url'                     => '',
    'prod_id'                        => '',
    'eng_grade'                      => '',
    'brand_nm'                       => '',
    'prod_model'                     => '',
    'sales_chnl'                     => '',
    'plat_form'                      => '',
    'payer_tp'                       => '',
    'trade_in_order_id'              => '',
    'trade_in_at'                    => '',
    'is_trade_in'                    => '',
    'sales_at'                       => '',
    'actual_at'                      => '',
    'trans_tm'                       => '',
    'mchnt_cd'                       => '',
    'mer_sub_at'                     => '',
    'discount_at'                    => '',
    'image01'                        => '',
    'image02'                        => '',
    'image03'                        => '',
    'image04'                        => '',
    'image05'                        => '',
    'image06'                        => '',
    'image07'                        => '',
    'image08'                        => '',
    'image09'                        => '',
    'image10'                        => '',
    'commitment_letter_photo'        => '',
    'commitment_letter_photo_format' => '',
    'device_photo'                   => '',
    'device_photo_format'            => '',
    'pack_and_active_photo'          => '',
    'bar_code'                       => '',
    'sn_code'                        => '',
    'imei1'                          => '',
    'imei2'                          => '',
    'register_model'                 => '',
    'record_number'                  => '',
    'eng_grade_standard'             => '',
    'invoice_info'                   => [
      'invoice_cd'      => '',
      'invoice_no'      => '',
      'invoice_dt'      => '',
      'invoice_link'    => '',
      'invoice_tp'      => '',
      'invoice_ck_cd'   => '',
      'nm'              => '',
      'tax'             => '',
      'invoice_tax_amt' => '',
      'sales_ent_nm'    => '',
      'tax_payer'       => '',
      'num'             => '',
      'service_nm'      => '',
    ],
    'track_info'                     => [
      'tracking_no'      => '',
      'tracking_company' => '',
      'usr_prov'         => '',
      'usr_city'         => '',
      'usr_area'         => '',
      'usr_addr'         => '',
      'tracking_type'    => '',
      'delivery_method'  => '',
      'shipping_addr'    => '',
      'delivery_time'    => '',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/audit/cup/upload']->post([
  'json' => [
    'org_no'                         => '',
    'sub_mchnt_cd'                   => '',
    'sub_mchnt_nm'                   => '',
    'store_nm'                       => '',
    'online_no'                      => '',
    'mchnt_order_id'                 => '',
    'upload_time'                    => '',
    'notify_url'                     => '',
    'prod_id'                        => '',
    'eng_grade'                      => '',
    'brand_nm'                       => '',
    'prod_model'                     => '',
    'sales_chnl'                     => '',
    'plat_form'                      => '',
    'payer_tp'                       => '',
    'trade_in_order_id'              => '',
    'trade_in_at'                    => '',
    'is_trade_in'                    => '',
    'sales_at'                       => '',
    'actual_at'                      => '',
    'trans_tm'                       => '',
    'mchnt_cd'                       => '',
    'mer_sub_at'                     => '',
    'discount_at'                    => '',
    'image01'                        => '',
    'image02'                        => '',
    'image03'                        => '',
    'image04'                        => '',
    'image05'                        => '',
    'image06'                        => '',
    'image07'                        => '',
    'image08'                        => '',
    'image09'                        => '',
    'image10'                        => '',
    'commitment_letter_photo'        => '',
    'commitment_letter_photo_format' => '',
    'device_photo'                   => '',
    'device_photo_format'            => '',
    'pack_and_active_photo'          => '',
    'bar_code'                       => '',
    'sn_code'                        => '',
    'imei1'                          => '',
    'imei2'                          => '',
    'register_model'                 => '',
    'record_number'                  => '',
    'eng_grade_standard'             => '',
    'invoice_info'                   => [
      'invoice_cd'      => '',
      'invoice_no'      => '',
      'invoice_dt'      => '',
      'invoice_link'    => '',
      'invoice_tp'      => '',
      'invoice_ck_cd'   => '',
      'nm'              => '',
      'tax'             => '',
      'invoice_tax_amt' => '',
      'sales_ent_nm'    => '',
      'tax_payer'       => '',
      'num'             => '',
      'service_nm'      => '',
    ],
    'track_info'                     => [
      'tracking_no'      => '',
      'tracking_company' => '',
      'usr_prov'         => '',
      'usr_city'         => '',
      'usr_area'         => '',
      'usr_addr'         => '',
      'tracking_type'    => '',
      'delivery_method'  => '',
      'shipping_addr'    => '',
      'delivery_time'    => '',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| code {data-required} | string | 响应码
| msg {data-required} | string | 响应描述
| sub_code | string | 详细应答码
| sub_msg | string | 详细应答码描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989535)
