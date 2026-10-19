export const messages={"管理后台":{"en":"Management console","ja":"管理画面"},"商品推荐销售如何分佣？":{"en":"How are product referral commissions calculated?","ja":"商品紹介のコミッションはどう計算しますか？"},"商品上传时可设置一名白名单或城市服务商推荐人及分佣百分比，默认0%。分佣按订单实付USDT扣除退款后计算，OPOC抵扣不计入。订单完成且售后期结束后才记入推荐人的商城USDT余额。每笔订单保存推荐人和比例版本，后来改比例不影响旧订单；商品推荐不等于买家邀请。本版仅示意商品配置及手动推进订单阶段，不是真实商品发布或资金自动结算。":{"en":"Product listing can specify one whitelist or city-provider referrer and a commission percentage, default 0%. Commission uses actual USDT paid less refunds and excludes OPOC. It credits the referrer’s store USDT only after completion and the after-sales period. Orders snapshot the referrer and rule version; later changes do not rewrite them. Product referral is separate from buyer invitation. This demo configures sample products and manually advances stages; it is not live publication or financial settlement.","ja":"商品掲載時にホワイトリストまたは都市事業者の紹介者1名と率（初期0%）を設定できます。実USDT支払額から返金を除き、OPOCは対象外です。注文完了・期間終了後にストアUSDTへ反映します。注文ごとに紹介者・ルールを保存し、後の変更は遡及しません。購入者招待とは別です。サンプル設定と段階操作のデモであり、本番公開・自動資金精算ではありません。"},
"商品推荐与分佣":{"en":"Product referrals & commission","ja":"商品紹介・コミッション"},
"商品上架时设置推荐会员ID及分佣比例，按实付USDT计算。":{"en":"Set the referring member ID and rate when listing a product; commission uses actual USDT paid.","ja":"商品掲載時に紹介会員IDと率を設定し、実際のUSDT支払額を基準に計算します。"},
"商品上架分佣设置":{"en":"Listing commission settings","ja":"商品掲載時のコミッション設定"},
"白名单及城市服务商均可推荐商品。分佣不含OPOC抵扣部分，订单完成且售后结束后记入推荐人的商城USDT余额；退款部分不计佣。":{"en":"Whitelist members and city providers can refer products. OPOC offsets are excluded. Commission credits the referrer’s store USDT balance after order completion and the after-sales period; refunded amounts earn no commission.","ja":"ホワイトリスト・都市事業者は商品を紹介できます。OPOC充当額は対象外で、注文完了・アフターサービス期間終了後に紹介者のストアUSDTへ反映します。返金分は対象外です。"},
"当前仅对13款示意商品配置模拟上架规则，不发布真实商品。正式上传、商品审核及管理员权限尚未接入。":{"en":"This configures demo listing rules for 13 sample products, without publishing real products. Production uploads, review and administrator authorization are not connected.","ja":"13点のサンプル商品の掲載ルールを設定するデモで、実商品は公開しません。本番の商品登録・審査・管理権限は未実装です。"},
"选择示意商品":{"en":"Choose a sample product","ja":"サンプル商品を選択"},
"推荐会员ID":{"en":"Referring member ID","ja":"紹介会員ID"},
"分佣比例 / %":{"en":"Commission rate / %","ja":"コミッション率 / %"},
"保存模拟上架分佣设置":{"en":"Save demo listing commission","ja":"デモ掲載コミッションを保存"},
"请以白名单或城市服务商身份登录后设置商品推荐分佣。":{"en":"Sign in as a whitelist member or city provider to configure product commission.","ja":"ホワイトリストまたは都市事業者としてログインして設定してください。"},
"同一商品仅由首次配置者修改；新设置只影响后续订单，旧订单保留推荐人及比例快照。0%表示不分佣。商品推荐与买家邀请关系独立。":{"en":"Only the initial configurator may edit a product rule. Changes affect future orders; existing orders retain the original referrer and rate. 0% disables commission. Product referrals are separate from buyer invitations.","ja":"商品ルールの変更は最初の設定者のみ可能です。変更は新しい注文に適用し、既存注文は紹介者・率を保存します。0%は分配なし。商品紹介と購入者の招待関係は別です。"},
"我的商品推荐分佣":{"en":"My product referral commission","ja":"商品紹介コミッション"},
"分佣USDT":{"en":"Commission USDT","ja":"コミッションUSDT"},
"已退款不计佣":{"en":"Refunded · no commission","ja":"返金済み・コミッションなし"},
"分佣已入账":{"en":"Commission credited","ja":"コミッション反映済み"},
"等待订单完成":{"en":"Awaiting order completion","ja":"注文完了待ち"},
"等待售后结束":{"en":"Awaiting after-sales completion","ja":"アフターサービス終了待ち"},
"暂无商品推荐分佣记录":{"en":"No product commission records","ja":"コミッション履歴はありません"},
"本页记录仅在当前页面内存，刷新清空，不发送真实USDT或链上交易。":{"en":"Records live only in page memory and reset on reload. No real USDT or on-chain transactions are sent.","ja":"履歴はページ内メモリのみで再読み込みすると消えます。実USDTやオンチェーン取引は送信しません。"},
"商品推荐分佣":{"en":"Product referral commission","ja":"商品紹介コミッション"},
"模拟订单完成":{"en":"Simulate order completion","ja":"注文完了をシミュレート"},
"模拟售后结束并结算":{"en":"Simulate after-sales end & settle","ja":"期間終了・精算をシミュレート"},
"商品已有分佣设置，修改仅影响后续订单。":{"en":"Commission is configured; changes affect future orders only.","ja":"設定済みです。変更は今後の注文のみに適用されます。"},
"推荐人须为有效白名单或城市服务商":{"en":"Referrer must be a valid whitelist member or city provider","ja":"紹介者は有効なホワイトリストまたは都市事業者である必要があります"},
"只能修改自己配置的商品分佣":{"en":"You may edit only your own product commission settings","ja":"自分が設定した商品ルールのみ変更できます"},
"模拟分佣设置已保存，后续订单使用新规则。":{"en":"Demo commission saved; future orders use the new rule.","ja":"デモ設定を保存しました。新しい注文に適用されます。"},
"模拟商品分佣已入账，不发送真实资金":{"en":"Demo commission credited; no real funds sent","ja":"デモコミッションを反映しました。実資金は送信しません"},
"推荐会员ID无效":{"en":"Invalid referring member ID","ja":"紹介会員IDが無効です"},
"无效的分佣金额或比例":{"en":"Invalid commission amount or rate","ja":"金額または率が無効です"},
"分佣比例须为0至100，最多两位小数":{"en":"Rate must be 0–100 with at most two decimal places","ja":"率は0〜100、小数点以下2桁以内で入力してください"},
"该订单分佣已结算":{"en":"Order commission already settled","ja":"この注文は精算済みです"},
"订单完成且售后结束后才能结算":{"en":"Settlement requires completed order and closed after-sales period","ja":"注文完了・アフターサービス期間終了後に精算できます"},
"OPO商城":{"en":"OPO Store","ja":"OPOストア"},
"平台愿景":{"en":"Platform vision","ja":"プラットフォームのビジョン"},
"消费者与分享者，都是建设者":{"en":"Consumers and sharers are builders","ja":"消費者も共有する人も、プラットフォームの創り手"},
"完全去中心化商业平台，消费者，分享者即为建设者。享受平台带来的红利分配。":{"en":"A fully decentralized commerce platform where consumers and sharers are builders, sharing in the value created by the platform.","ja":"完全に分散化された商業プラットフォーム。消費者も共有する人も創り手となり、プラットフォームが生み出す価値の分配を享受します。"},
"建立一个全新的分配平权，信息平权新一代的价值互联网。":{"en":"Build a new generation of the Internet of Value, founded on equal access to distribution and information.","ja":"分配と情報への平等なアクセスを基盤とする、新世代の価値のインターネットを築きます。"},
"打破传统商业的垄断和价值孤岛，让智能体接入价值互联网，为建设者创造无限可能。":{"en":"Break down traditional commercial monopolies and isolated pools of value. Connect intelligent agents to the Internet of Value and create limitless possibilities for its builders.","ja":"従来の商業の独占と価値の孤立を打ち破り、インテリジェントエージェントを価値のインターネットへつなぎ、創り手に無限の可能性をもたらします。"},
"本页为平台建设愿景。当前站点为功能模拟展示，去中心化架构、治理及真实红利分配尚未实施验收。":{"en":"This page describes the platform vision. The current site is a functional simulation; decentralized architecture, governance and real value distributions have not been implemented and accepted.","ja":"このページは構築のビジョンを示しています。現在のサイトは機能デモであり、分散型アーキテクチャ・ガバナンス・実際の分配は実装・検証されていません。"},
"商品不存在":{"en":"Product not found","ja":"商品が見つかりません"},
"请返回商品分类重新选择。":{"en":"Return to categories and choose a product.","ja":"商品カテゴリーに戻ってお選びください。"},
"商品图片":{"en":"Product images","ja":"商品画像"},
"完整主图":{"en":"Main image","ja":"メイン画像"},
"品牌细节":{"en":"Brand detail","ja":"ブランドの詳細"},
"外观细节":{"en":"Appearance detail","ja":"外観の詳細"},
"细节图为同一示意主图的局部放大。":{"en":"Detail views are enlarged crops of the same sample main image.","ja":"詳細画像は同じサンプル主画像の部分拡大です。"},
"可自行设定积分支付数量，低于商品总价50%；其余使用模拟USDT支付。":{"en":"Choose any point amount below 50% of the product total; pay the rest with demo USDT.","ja":"商品合計の50%未満でポイント数を指定し、残りをデモUSDTで支払います。"},
"当前仅演示商品浏览、支付与订单流程。真实规格、库存、物流及售后资料尚未录入。":{"en":"This demonstrates browsing, payment and orders only. Verified specifications, inventory, shipping and after-sales details are not supplied.","ja":"商品閲覧・決済・注文のデモです。実際の仕様・在庫・配送・アフターサービス情報は未登録です。"},
"前往付款":{"en":"Go to payment","ja":"支払いへ進む"},
"返回商品分类":{"en":"Back to categories","ja":"商品カテゴリーへ戻る"},
"商品详情":{"en":"Product details","ja":"商品詳細"},
"确认商品与付款":{"en":"Review product and payment","ja":"商品・支払いの確認"},
"本页产品图用于OPO品牌展示，非真实供货凭证。请通过上方图片切换查看主图与局部细节，再在下方体验组合付款。":{"en":"Product images demonstrate the OPO brand and do not verify real supply. Switch the views above to inspect the main image and details, then try combined payment below.","ja":"画像はOPOブランドのデモであり、実際の供給を証明しません。上の切替で主画像・詳細を確認し、下で組み合わせ決済を体験できます。"},"持有时间如何影响分红？":{"en":"How does holding time affect rewards?","ja":"保有時間は配分にどう影響しますか？"},
"分红按合格持有时间累计：每个时段分别计算有效OPOC数量×小时数，再汇总个人权重。旧资格有效数量为300基础＋实际可用OPOC，新资格为达到门槛时的实际可用OPOC；无资格时段为0，不另乘未经确认的长期持有奖励倍数。":{"en":"Rewards accumulate over eligible holding time: calculate effective OPOC × hours for each interval, then sum the personal weight. Legacy uses 300 base plus spendable OPOC; new eligibility uses actual spendable OPOC while the threshold is met. Ineligible intervals count as zero. No unapproved long-term bonus multiplier is added.","ja":"配分は資格を保有する時間で積算します。区間ごとの有効OPOC×時間を合計し、旧資格は300基礎＋利用可能OPOC、新資格は基準達成時の利用可能OPOCを使用します。資格がない区間は0とし、未確定の長期保有ボーナス倍率は追加しません。"},
"按合格持有时间分段计算":{"en":"Calculate by eligible holding intervals","ja":"資格保有時間の区間別計算"},
"个人权重＝Σ（各合格时段的有效OPOC数量×该时段小时数）。分配比例＝个人累计权重÷全体累计权重。余额变化、资格暂停或转让时分段；不把最后余额套用全天。":{"en":"Personal weight = sum of effective OPOC × hours in each eligible interval. Allocation share = personal cumulative weight / total cumulative weight. Split intervals when balances, eligibility or ownership change; never apply the final balance to the whole day.","ja":"個人加重＝各対象区間の有効OPOC×時間の合計。配分率＝個人累積加重÷全体累積加重。残高・資格・保有者の変更時に区切り、最終残高を一日全体に適用しません。"},
"起始小时":{"en":"Start hour","ja":"開始時刻"},
"结束小时":{"en":"End hour","ja":"終了時刻"},
"该时段可用OPOC":{"en":"Spendable OPOC in this interval","ja":"この区間の利用可能OPOC"},
"该时段具有分红资格":{"en":"Eligible for rewards in this interval","ja":"この区間は配分対象"},
"删除时段":{"en":"Remove interval","ja":"区間を削除"},
"增加持有时段":{"en":"Add holding interval","ja":"保有区間を追加"},
"合格持有时间":{"en":"Eligible holding duration","ja":"対象保有時間"},
"累计时间权重":{"en":"Cumulative time weight","ja":"累積時間加重"},
"仅模拟一天0至24小时，不代表已记录真实资格时间。正式系统须按服务器事件记录时间、余额、资格及转让，日切时区待定。":{"en":"Simulates one day from hour 0 to 24; no real eligibility history is recorded. Production must record server event times, balances, eligibility and transfers. The daily cutoff time zone is pending.","ja":"0〜24時の一日を試算するもので、実際の資格履歴は記録しません。本番ではサーバーのイベント時刻・残高・資格・譲渡を記録します。日次区切りのタイムゾーンは未確定です。"},
"请设置1至12个不重叠的持有时段":{"en":"Set 1–12 non-overlapping holding intervals","ja":"重複しない保有区間を1〜12件設定してください"},
"时段须按顺序且不重叠，范围为0至24小时":{"en":"Intervals must be ordered, non-overlapping and within hours 0–24","ja":"区間を0〜24時内で、順序どおり重複なく設定してください"},
  "新取得白名单按至少5,000已释放、未消费的可用OPOC判断；城市服务商仍为10,000可用OPOC。此前通过消费1,500元取得白名单的一批旧客户，核定历史名单后在2.0保留资格，不要求补足新5,000门槛。该历史消费不是新版资格收费，也不自动换成积分。": {
    "en": "New whitelist eligibility requires at least 5,000 released, unspent OPOC; city provider remains at 10,000. A historical customer cohort earned whitelist status through RMB 1,500 in spending. Their verified eligibility carries into 2.0 without the new 5,000 threshold. That historical spending is not a new eligibility fee and is not converted into points.",
    "ja": "新規ホワイトリストは付与済み・未使用OPOCが5,000以上、都市事業者は引き続き10,000以上です。過去に1,500人民元の消費で取得した旧会員は、名簿確認後に2.0へ資格を承継し、新基準5,000への補充は不要です。過去の消費は新版の資格費用ではなく、ポイントへ換算しません。"
  },
  "白名单可上传商品，仍须商家核验和商品审核；城市服务商的区域、具体权限及职责待确认。旧白名单按（300基础＋本人实际可用OPOC）乘合格时间，新资格按实际可用OPOC持有量乘合格时间，参与同一三年50万USDT等值ZC城市专项，不重复叠加。300只是分配权重，不是赠送积分或固定收益。两类权益以后逐步增加，未公布内容不预先承诺。": {
    "en": "Whitelist members may upload products subject to merchant and product review. Provider territory, permissions and duties remain pending. Legacy whitelist uses (300 base + personally held spendable OPOC) times eligible time; new eligibility uses actual spendable OPOC times eligible time. Both share the three-year 500,000 USDT-equivalent city ZC budget without stacking. The 300 is a weight, not free points or a fixed return. Benefits will expand gradually; unpublished benefits are not promised.",
    "ja": "ホワイトリストの商品登録は店舗確認・商品審査が必要です。事業者の区域・権限・業務は未確定です。旧資格は固定（300基礎＋本人の利用可能OPOC）×対象時間、新資格は実際の利用可能OPOC×対象時間で、3年総額500,000 USDT相当ZCの都市枠を共有し、重複計上しません。300は配分加重であり、付与ポイントや固定利益ではありません。権益は段階的に追加します。"
  },
  "新资格随实际可用余额判断：低于10,000暂停服务商资格，仍满5,000保留白名单，不足5,000暂停新白名单；消费、转出及退款恢复会触发重判。历史白名单不因低于新门槛而失效，按300基础加本人实际可用OPOC计权；转让后原持有人不再拥有该历史资格或对应未来权重。": {
    "en": "New eligibility follows spendable balances: provider status pauses below 10,000; whitelist remains from 5,000 and pauses below it. Spending, transfers and refunds trigger reassessment. Legacy eligibility is retained below the new threshold with a 300 base plus personally held spendable OPOC weight. After transfer, the sender loses that legacy eligibility and its future weight.",
    "ja": "新資格は利用可能残高で判定し、10,000未満で事業者を停止、5,000以上ならホワイトリストを維持し、それ未満では新ホワイトリストも停止します。消費・送金・返金で再判定します。旧資格は新基準未満でも300基礎に本人の利用可能OPOCを加えて計算し、譲渡後は元の保有者の旧資格と将来の加重がなくなります。"
  },
  "登录会员中心，在会员ID旁查看☆历史白名单、◇白名单或◆城市服务商标记。左侧“LP与奖励”中，模拟质押区下方是城市资格与专项奖励。展开计算器，选择旧资格300基础加实际持有量或新资格实际持有量，输入合格小时、其他用户权重和ZC价格查看试算。计算器不授予资格，不代表已到账奖励。": {
    "en": "Sign in and check the badge beside your member ID: ☆ legacy whitelist, ◇ whitelist or ◆ city provider. Open LP & Rewards and find city eligibility below demo staking. Expand the calculator and choose legacy 300-base-plus-holdings or new actual-holdings weighting, with eligible hours, others’ weight and ZC price. Calculator choices do not grant eligibility or credit rewards.",
    "ja": "ログイン後、会員ID横の☆旧ホワイトリスト、◇ホワイトリスト、◆都市事業者の表示を確認します。「LP・報酬」のデモステーキング下に都市資格があります。計算欄で旧300基礎＋実保有量または新実保有加重を選び、時間・他会員加重・ZC価格を入力して試算できます。計算だけで資格や報酬は付与されません。"
  },
  "旧资格须由历史名单与消费资料核定后绑定会员ID，不重新收取1,500元。新版按5,000可用OPOC门槛判断。当前可在会员中心体验一份虚构历史资格，或通过模拟认购释放体验新门槛；样本只在当前页面有效、刷新清空，不连接真实旧客户。商品上传和真实发币尚未接入。OPOC可消费和内部转账，不能兑换USDT或ZC。": {
    "en": "Legacy eligibility must be verified against historical rosters and spending records and linked to a member ID, with no new RMB 1,500 charge. New eligibility uses the 5,000 spendable OPOC threshold. The member center offers one fictitious legacy record per page, or demo subscriptions and vesting for the new tier. Samples reset on reload and do not import real customers. Product uploads and live token distribution are not connected. OPOC can be spent or internally transferred, not redeemed for USDT or ZC.",
    "ja": "旧資格は過去の名簿・消費記録を確認して会員IDに紐付け、1,500元を再徴収しません。新資格は利用可能OPOCが5,000以上です。会員画面で架空の旧資格1件、またはデモ申込・付与で新基準を体験できます。再読み込みで消えるサンプルで、実際の旧会員とは連携しません。商品登録・実発行は未実装です。OPOCは消費・内部送金専用で、USDT・ZCには交換できません。"
  },
  "历史白名单如何转让？": {
    "en": "How is legacy whitelist eligibility transferred?",
    "ja": "旧ホワイトリストを譲渡するには？"
  },
  "仅转资格及转让时点后的未来权益；原账户OPOC余额和已获奖励不转。会员中心输入接收会员ID、核对并确认模拟转让后，旧持有人历史标记和300权重取消，新用户承接。当前仅同页虚构历史资格可演示；真实名单、转让核验、日内时间切分及新余额型资格转让流程尚待开发。": {
    "en": "Only eligibility and future benefits after transfer move. OPOC balances and earned rewards stay with their owners. Enter the recipient ID in Member center, review and confirm the demo transfer. The sender loses the legacy badge and 300 weight; the recipient inherits them. Only fictitious same-page legacy records are supported. Real roster checks, transfer verification, intraday timing and transfers of new balance-based eligibility remain to be developed.",
    "ja": "譲渡対象は資格と譲渡時点以降の権益のみで、OPOC残高・獲得済み報酬は移動しません。会員画面で受取IDを入力し確認すると、元の旧資格マーク・300加重がなくなり受取人が承継します。同じページの架空記録のみのデモです。本番名簿・譲渡確認・日内按分・新残高型資格の譲渡は未実装です。"
  },
  "历史白名单": {
    "en": "Legacy whitelist",
    "ja": "旧会員ホワイトリスト"
  },
  "白名单": {
    "en": "Whitelist",
    "ja": "ホワイトリスト"
  },
  "城市服务商": {
    "en": "City service provider",
    "ja": "都市サービス事業者"
  },
  "旧资格承接与转让": {
    "en": "Legacy eligibility and transfer",
    "ja": "旧資格の承継・譲渡"
  },
  "历史消费取得的白名单在2.0继续保留，按300 OPOC入门权重加本人实际可用OPOC参与城市专项，不增加可消费积分、不兑换USDT或ZC。新白名单需至少5,000可用OPOC，按实际持有量与时间加权；不叠加两份权重。": {
    "en": "Previously earned whitelist eligibility continues in 2.0 with a city reward weight of 300 base plus personally held spendable OPOC. It credits no spendable points and cannot be redeemed for USDT or ZC. New whitelist eligibility requires at least 5,000 spendable OPOC and is weighted by actual holdings and time. Weights do not stack.",
    "ja": "過去の消費で取得した資格は2.0に承継し、都市報酬は300の基礎加重に本人の利用可能OPOCを加えて計算します。利用可能ポイントは増えず、USDT・ZCへ交換できません。新規資格には利用可能OPOCが5,000以上必要で、実保有量と時間で加重します。加重は重複しません。"
  },
  "历史名单及原始记录需核定；当前仅演示，不接收资格费用。其他历史取得批次分别核验，不将费用折算成积分。": {
    "en": "Historical rosters and original records require verification. This is a demo with no eligibility fee collection. Other historical cohorts are reviewed separately; fees are not converted to points.",
    "ja": "過去の名簿・原記録の確認が必要です。デモであり資格費用は受け取りません。別の取得経緯は個別確認し、費用をポイント換算しません。"
  },
  "体验一份历史资格（仅模拟）": {
    "en": "Try one legacy eligibility record (demo only)",
    "ja": "旧資格1件を体験（デモのみ）"
  },
  "本页历史资格样本已使用": {
    "en": "Legacy sample already assigned on this page",
    "ja": "このページの旧資格サンプルは使用済みです"
  },
  "只转资格及未来权益，不转OPOC余额或已获奖励；原持有人转让后失去该历史资格及300权重。": {
    "en": "Only eligibility and future benefits transfer. OPOC balances and earned rewards stay with their owners. The sender loses the legacy eligibility and its 300 weight.",
    "ja": "譲渡対象は資格と将来の権益のみです。OPOC残高・獲得済み報酬は移動しません。譲渡元は旧資格と300の加重を失います。"
  },
  "接收资格的会员ID": {
    "en": "Recipient member ID",
    "ja": "資格を受け取る会員ID"
  },
  "核对历史白名单转让": {
    "en": "Review legacy whitelist transfer",
    "ja": "旧資格の譲渡を確認"
  },
  "确认模拟资格转让": {
    "en": "Confirm demo eligibility transfer",
    "ja": "デモ資格譲渡を確定"
  },
  "模拟资格转让完成，余额和已获奖励不变": {
    "en": "Demo eligibility transferred; balances and earned rewards unchanged",
    "ja": "デモ資格を譲渡しました。残高・獲得済み報酬は変更なし"
  },
  "请选择尚未持有历史白名单的其他会员ID": {
    "en": "Choose another member without legacy whitelist eligibility",
    "ja": "旧資格を持たない別の会員IDを指定してください"
  },
  "该资格转让已处理": {
    "en": "Eligibility transfer already processed",
    "ja": "この資格譲渡は処理済みです"
  },
  "我的资格转让记录": {
    "en": "My eligibility transfer records",
    "ja": "資格譲渡履歴"
  },
  "暂无资格转让记录": {
    "en": "No eligibility transfers",
    "ja": "資格譲渡履歴はありません"
  },
  "未来权益按转让时点起归新持有人；真实日内切分与历史对账尚未接入。": {
    "en": "Future entitlement belongs to the recipient from the transfer time. Production intraday splits and historical reconciliation are not connected.",
    "ja": "譲渡時点以降の権益は受取人に帰属します。本番の日内按分・過去の照合は未実装です。"
  },
  "资格来源（仅用于计算器）": {
    "en": "Eligibility source (calculator only)",
    "ja": "資格の種類（計算用）"
  },
  "新资格 · 按实际可用OPOC": {
    "en": "New eligibility · actual spendable OPOC",
    "ja": "新規資格・実際の利用可能OPOC"
  },
  "旧资格 · 300基础＋实际持有": {
    "en": "Legacy eligibility · 300 base + actual holdings",
    "ja": "旧資格・300基礎＋実保有量"
  },
  "本次计算基准": {
    "en": "Weight basis",
    "ja": "今回の計算基準"
  },
  "等效OPOC（不是积分余额）": {
    "en": "OPOC-equivalent (not a point balance)",
    "ja": "OPOC相当（ポイント残高ではありません）"
  },
  "旧资格保留身份，不受5,000新门槛影响；（300入门权重＋本人实际可用OPOC）乘合格时长。新白名单5,000起、服务商10,000起，使用实际可用OPOC乘合格时长。": {
    "en": "Legacy eligibility is retained without the new 5,000 threshold; weight is (300 base + personally held spendable OPOC) times eligible hours. New whitelist starts at 5,000 and providers at 10,000, weighted by actual spendable OPOC times eligible hours.",
    "ja": "旧資格は新基準5,000未満でも維持し、（300基礎＋本人の利用可能OPOC）×対象時間で計算します。新規は5,000以上でホワイトリスト、10,000以上で事業者となり、利用可能OPOC×対象時間で計算します。"
  },
  "白名单可上传商品（仍需审核），服务商具体权限待确认；两类权益以后逐步增加，未公布部分不预先承诺。": {
    "en": "Whitelist members may upload products subject to review; provider permissions remain pending. Benefits will expand gradually; unpublished benefits are not promised.",
    "ja": "ホワイトリストの商品登録は審査が必要です。事業者の具体権限は未確定です。権益は段階的に追加し、未公開の内容は約束しません。"
  },
  "新白名单：低于5,000暂停；服务商：低于10,000暂停，仍满5,000保留白名单。历史资格独立保留，升级及与新资格的转换规则待确认。": {
    "en": "New whitelist pauses below 5,000. Provider status pauses below 10,000; whitelist remains at 5,000 or above. Legacy eligibility is retained independently; upgrades or conversion to new eligibility remain pending.",
    "ja": "新規ホワイトリストは5,000未満で停止。事業者は10,000未満で停止し、5,000以上ならホワイトリストを維持します。旧資格は独立して維持し、新資格への変更・昇格は未確定です。"
  },
  "选择示意商品测试购买，自行填写本次使用的OPOC数量，可填0；积分抵扣金额必须低于商品总价50%，且不能超过可用积分，其余用模拟USDT支付。输入后实时显示两种支付金额。右侧订单入口查看支付组成，可模拟一次全额退款。": {
    "en": "Choose a sample product and enter the OPOC amount to use, including 0. The offset must be below 50% of the product total and within your available points; the rest is paid in demo USDT. Both amounts update as you type. View the tender in Orders and try a single full refund.",
    "ja": "サンプル商品を選び、今回使用するOPOCを入力します。0も指定できます。抵扣額は商品合計の50%未満かつ利用可能ポイント以内とし、残りをデモUSDTで支払います。入力に応じて内訳が更新されます。注文欄で内訳と1回限りの全額返金を試せます。"
  },
  "使用OPOC（自行设置数量，低于总价50%）": {
    "en": "Use OPOC (choose an amount below 50% of the total)",
    "ja": "OPOCを使用（金額を指定・合計の50%未満）"
  },
  "本次使用积分 / OPOC": {
    "en": "OPOC to use for this order",
    "ja": "今回使用するOPOC"
  },
  "本单可用积分上限：": {
    "en": "Maximum OPOC for this order: ",
    "ja": "今回利用可能なOPOC上限："
  },
  "；可以填0，不使用积分。": {
    "en": "; enter 0 to pay without points.",
    "ja": "。ポイントを使わない場合は0を入力します。"
  },
  "积分数量超出本单可用上限": {
    "en": "Points exceed the available limit for this order",
    "ja": "今回利用可能なポイント上限を超えています"
  },
  "无效的结算金额": {
    "en": "Invalid checkout amount",
    "ja": "決済金額が無効です"
  },
  "OPO 桌面展示立牌": {
    "en": "OPO tabletop display sign",
    "ja": "OPO 卓上ディスプレイ"
  },
  "OPO 桌面收纳盒": {
    "en": "OPO desk organizer",
    "ja": "OPO 卓上収納ボックス"
  },
  "OPO 便携蓝牙音箱": {
    "en": "OPO portable Bluetooth speaker",
    "ja": "OPO 携帯Bluetoothスピーカー"
  },
  "OPO 日常双肩包": {
    "en": "OPO everyday backpack",
    "ja": "OPO デイパック"
  },
  "OPO 随身护手霜": {
    "en": "OPO travel hand cream",
    "ja": "OPO 携帯ハンドクリーム"
  },
  "OPO 轻量运动水壶": {
    "en": "OPO lightweight sports bottle",
    "ja": "OPO 軽量スポーツボトル"
  },
  "OPO 挂耳咖啡礼盒": {
    "en": "OPO drip coffee gift box",
    "ja": "OPO ドリップコーヒーギフト"
  },
  "七大分类好物": {
    "en": "Explore all seven categories",
    "ja": "7カテゴリーから探す"
  },
  "每类一款 · 发现更多生活灵感": {
    "en": "One pick per category · Everyday inspiration",
    "ja": "各カテゴリーから1点・暮らしのヒント"
  },
  "成为白名单和城市服务商需要什么条件？": {
    "en": "What qualifies me for the whitelist or city service provider?",
    "ja": "ホワイトリスト・都市サービス事業者になる条件は？"
  },
  "按会员账号当前已释放、未消费的可用OPOC判断：达到5,000 OPOC为白名单，达到10,000 OPOC为城市服务商。待释放积分、USDT余额和钱包中的ZC不计入门槛，也不要求另外质押LP。消费或转出OPOC导致余额下降时暂停对应资格；余额重新达到门槛后重新判定。转入的可用OPOC计入当前余额；同一账号只按最高一级计算，不叠加两份奖励权重。": {
    "en": "Eligibility uses the member account’s released, unspent OPOC: 5,000 qualifies for the whitelist and 10,000 for city service provider. Unvested points, USDT and wallet ZC do not count; LP staking is not required. Spending or transfers out can pause the relevant tier. Eligibility is reassessed when the balance recovers. Received spendable OPOC counts. Each account is weighted once at its highest tier.",
    "ja": "会員口座の付与済み・未使用OPOCが5,000以上でホワイトリスト、10,000以上で都市サービス事業者です。付与予定ポイント、USDT、ウォレットのZCは対象外で、LPステーキングは不要です。消費・送金で下回ると該当資格が停止し、回復時に再判定します。受け取った利用可能OPOCも含み、同じ口座の報酬加重は最高資格で1回のみ計算します。"
  },
  "白名单和城市服务商分别有哪些权益？": {
    "en": "What benefits do the two tiers provide?",
    "ja": "各資格にはどのような権益がありますか？"
  },
  "白名单具备商品上传资格；正式商品仍须完成商家资料核验及商品审核，不代表无需审核即可发布。城市服务商为更高等级资格，具体城市区域、管理权限和运营职责待确认，当前不承诺独家代理、额外佣金或固定收益。两类合格账号共享城市专项：三年总额50万USDT等值ZC，按合格可用OPOC及持有时间加权分配，每次按核定ZC价格折算。这是全体共享总额，不是每人额度；与LP质押奖励、历史节点权益分别计算。": {
    "en": "Whitelist members qualify to upload products, subject to merchant verification and product review. City service provider is the higher tier; territory, management powers and operating duties are pending confirmation. No exclusive agency, extra commission or fixed return is promised. Eligible accounts share a total three-year city budget of 500,000 USDT-equivalent in ZC, weighted by eligible spendable OPOC and holding time, converted at the approved release price. This is the shared pool, not an individual allocation, and is separate from LP staking and historical-node entitlements.",
    "ja": "ホワイトリストは商品登録資格を持ちますが、店舗確認と商品審査が必要です。都市サービス事業者は上位資格です。担当区域・管理権限・運営業務は未確定で、独占代理権・追加手数料・固定利益は約束していません。対象会員は3年総額500,000 USDT相当のZCを、対象OPOCと保有時間で加重配分し、各回の承認価格で換算します。全員共有の枠であり、1人分ではありません。LP報酬・既存ノード権益とは別です。"
  },
  "在哪里查看资格和预计权益？": {
    "en": "Where can I check eligibility and estimated rewards?",
    "ja": "資格と権益の試算はどこで確認できますか？"
  },
  "先登录会员中心，再从左侧进入“LP与奖励”，查看左列“模拟质押LP”下方的“城市资格与专项奖励”。页面显示当前账号可用OPOC、待释放OPOC及资格状态；展开“资格与奖励模拟计算”，可输入持有量、合格小时、其他用户权重及ZC价格，查看模拟个人当日分配比例、USDT记账额度和ZC枚数。计算器输入不会改变账号余额或授予资格；结果不是已到账或可领取收益，当前没有真实奖励账单。": {
    "en": "Sign in, open LP & Rewards from the left navigation, and find City eligibility and special rewards below Demo LP staking in the left column. Check your spendable OPOC, unvested points and tier. Expand the eligibility and reward calculator to explore holding amounts, eligible hours, other users’ weight and ZC price. It shows a simulated daily share, USDT accounting amount and ZC quantity. Inputs do not change your account or grant eligibility. Estimates are not credited or claimable rewards; live reward statements are not available.",
    "ja": "ログイン後、左メニューの「LP・報酬」を開き、左列のデモLPステーキング下にある都市資格・特別報酬を確認します。利用可能OPOC・付与予定分・資格を表示します。資格・報酬計算を展開して、保有量・対象時間・他会員の加重・ZC価格を入力すると、個人の日次割合・USDT記帳額・ZC枚数を試算できます。入力で残高や資格は変わりません。試算は入金済み・受取可能な報酬ではなく、本番明細は未実装です。"
  },
  "如何获得资格、上传商品或领取城市奖励？": {
    "en": "How do I qualify, upload products or receive city rewards?",
    "ja": "資格取得・商品登録・都市報酬の受取方法は？"
  },
  "当前可在同一页面注册模拟会员，经模拟充值、认购及推进测试天数获得已释放OPOC，或由同页其他模拟会员按内部ID转入，达到门槛后查看资格。正式资格须由服务端核验余额与持有记录；上传商品还需商家及商品审核，城市服务商的具体权限待确认。正式城市奖励还需确定起止日期、核定取价、奖励库存、分配审核及领取流程。当前上传和真实领取均未开放，不会因填写计算器或达到演示门槛自动发币；无需为测试向任何地址真实转账。OPOC可购物抵扣及内部ID转账，不能兑换USDT或ZC。": {
    "en": "In this demo, register members on the same page, simulate a deposit and subscription, then advance demo time to release OPOC; another demo member can also transfer spendable OPOC to your internal ID. Check your tier once the threshold is met. Production requires server-verified balances and holding history; uploads also need merchant and product review. Provider permissions are pending. Live rewards require approved dates, pricing, inventory, allocation review and a claim process. Uploads and live claims are not open; calculator entries or demo thresholds do not send tokens. Never send real funds to test. OPOC supports shopping offsets and internal ID transfers, not USDT or ZC conversion.",
    "ja": "デモでは同じページで登録し、デモ入金・申込後にテスト日数を進めてOPOCを付与するか、他のデモ会員から会員ID宛てに利用可能OPOCを受け取ります。基準到達後に資格を確認できます。本番はサーバーで残高・保有履歴を確認し、商品登録には店舗・商品審査が必要です。事業者権限は未確定です。実報酬には期間・取価・在庫・配分審査・受取手順の確定が必要です。商品登録・実報酬受取は未開放で、試算入力やデモ基準達成による自動送金はありません。テストのために実資金を送らないでください。OPOCは買い物・会員ID送金に利用でき、USDT・ZCには交換できません。"
  },
  "OPOC转账": {
    "en": "OPOC transfer",
    "ja": "OPOC送金"
  },
  "内部ID转账": {
    "en": "Internal ID transfer",
    "ja": "会員ID送金"
  },
  "仅限会员内部ID转账；OPOC不能兑换USDT或ZC。": {
    "en": "Transfers between member IDs only; OPOC cannot be exchanged for USDT or ZC.",
    "ja": "会員ID間の送金専用。OPOCはUSDTやZCに交換できません。"
  },
  "可转账OPOC": {
    "en": "Transferable OPOC",
    "ja": "送金可能OPOC"
  },
  "收款会员内部ID": {
    "en": "Recipient member ID",
    "ja": "受取会員ID"
  },
  "转账数量 / OPOC": {
    "en": "Amount / OPOC",
    "ja": "送金額 / OPOC"
  },
  "核对转账": {
    "en": "Review transfer",
    "ja": "送金内容を確認"
  },
  "确认OPOC转账": {
    "en": "Confirm OPOC transfer",
    "ja": "OPOC送金を確認"
  },
  "确认模拟转账": {
    "en": "Confirm demo transfer",
    "ja": "デモ送金を確定"
  },
  "OPOC不能兑换USDT或ZC。": {
    "en": "OPOC cannot be exchanged for USDT or ZC.",
    "ja": "OPOCはUSDTやZCに交換できません。"
  },
  "只可转出已释放、未消费的OPOC；收款后立即可用，不重复产生认购权益。转账后城市资格按可用余额重新判断。": {
    "en": "Only released, unspent OPOC can be transferred. Received points are immediately usable and create no new subscription entitlement. City eligibility follows the available balance.",
    "ja": "付与済み・未使用OPOCのみ送金可能。受取後すぐ利用でき、新規認購権益は発生しません。都市資格は利用可能残高で再判定します。"
  },
  "模拟转账仅在当前页面注册的会员间有效，刷新清空。正式转账尚未接入，不使用真实资产。": {
    "en": "Demo transfers work only between members registered on this page and reset on reload. Real transfers are not connected.",
    "ja": "このページで登録した会員間のみのデモです。再読み込みで消去され、実際の資産は使用しません。"
  },
  "我的OPOC转账记录": {
    "en": "My OPOC transfers",
    "ja": "OPOC送金履歴"
  },
  "暂无OPOC转账记录": {
    "en": "No OPOC transfers yet",
    "ja": "OPOC送金履歴はありません"
  },
  "转出": {
    "en": "Sent",
    "ja": "送金"
  },
  "转入": {
    "en": "Received",
    "ja": "受取"
  },
  "模拟OPOC转账成功": {
    "en": "Demo OPOC transfer completed",
    "ja": "デモOPOC送金完了"
  },
  "请填写其他已注册会员的内部ID": {
    "en": "Enter another registered member ID",
    "ja": "他の登録済み会員IDを入力してください"
  },
  "转账数量须大于0，最多四位小数": {
    "en": "Enter a positive amount with at most 4 decimal places",
    "ja": "正の金額を小数点以下4桁以内で入力してください"
  },
  "可用OPOC不足，待释放积分不能转账": {
    "en": "Insufficient available OPOC; locked points cannot be transferred",
    "ja": "利用可能OPOCが不足しています。未付与ポイントは送金できません。"
  },
  "该转账已处理，请勿重复提交": {
    "en": "Transfer already processed",
    "ja": "この送金は処理済みです"
  },
  "收款积分超出模拟范围": {
    "en": "Recipient balance exceeds demo limit",
    "ja": "受取残高がデモ上限を超えます"
  },
  "商城消费及内部ID转账 · 不兑换代币": {
    "en": "Shopping and internal ID transfers · No token exchange",
    "ja": "買い物・会員ID送金専用・トークン交換不可"
  },
  "OPOC可商城消费及内部ID转账，不兑换ZC或USDT。": {
    "en": "OPOC supports shopping and internal ID transfers, with no ZC or USDT conversion.",
    "ja": "OPOCは買い物と会員ID送金に利用でき、ZCやUSDTには交換できません。"
  },
  "下载中文操作手册PDF": {
    "en": "Download user manual PDF (Chinese)",
    "ja": "中国語の操作マニュアルPDF"
  },
  "下载上线准备清单PDF": {
    "en": "Download launch checklist PDF (Chinese)",
    "ja": "中国語の公開準備チェックリストPDF"
  },
  "这是正式资金商城吗？": {
    "en": "Is this a live money-handling store?",
    "ja": "実際の資金を扱うストアですか？"
  },
  "当前链接是功能框架演示。商品、订单、认购、充值、销毁和奖励均为模拟，不接收真实资金；正式会员、支付与合约还需研发验收。": {
    "en": "This link is a framework demo. Products, orders, subscriptions, deposits, burns and rewards are simulated. Do not send funds. Production identity, payments and contracts still require development and acceptance.",
    "ja": "このリンクは全体構成のデモです。商品・注文・申込・入金・バーン・報酬はすべてシミュレーションです。送金しないでください。本番の本人確認・決済・コントラクトは開発と検証が必要です。"
  },
  "没有邀请码如何注册？": {
    "en": "How do I register without a referral code?",
    "ja": "紹介コードがない場合は？"
  },
  "邀请码留空自动使用平台代码opo1。填写本页已注册会员的邀请码可建立直接邀请关系。BSC公开钱包地址必填；请用虚构资料和测试口令，妥善记录本次生成的会员ID。": {
    "en": "Leave the code blank to use platform code opo1. A member code created on this page records a direct referral. A public BSC wallet address is required. Use fictitious details and a test password, and note the generated member ID.",
    "ja": "空欄ならプラットフォームコードopo1を使用します。同ページで作成した会員コードなら直接紹介を記録します。BSC公開アドレスは必須です。架空の情報・テスト用パスワードを使い、発行された会員IDを控えてください。"
  },
  "刷新后为什么账号和订单消失？": {
    "en": "Why do accounts and orders disappear after refresh?",
    "ja": "再読み込みで会員情報や注文が消えるのはなぜ？"
  },
  "当前模拟记录仅在页面内存中，刷新或关闭会清空。只保存语言偏好。正式版必须接入持久数据库、安全登录和账号恢复，当前无法恢复已清空的模拟账号。": {
    "en": "Demo records live only in page memory and are cleared on refresh or close. Only the language preference is saved. Production needs a persistent database, secure sign-in and account recovery. Cleared demo accounts cannot be restored.",
    "ja": "デモ記録はページのメモリ内のみで、再読み込み・終了により消えます。保存するのは言語設定のみです。本番にはデータベース・安全な認証・アカウント復旧が必要です。消えたデモ情報は復元できません。"
  },
  "平台USDT余额与钱包余额为何不同？": {
    "en": "Why do store USDT and wallet balances differ?",
    "ja": "ストア残高とウォレット残高が違うのはなぜ？"
  },
  "钱包余额是链上资产，商城余额是会员账本，币安余额属于交易所账户，三者分开。正式充值必须经链上确认、会员匹配与防重复检查才入账，连接钱包不会自动充值。": {
    "en": "On-chain wallet assets, the member ledger and Binance account balances are separate. Live deposits need chain confirmation, member matching and duplicate protection. Connecting a wallet does not credit the store.",
    "ja": "チェーン上の資産、会員台帳、Binance口座は別です。本番入金はチェーン確認・会員照合・二重計上防止を経て反映します。接続だけでは入金になりません。"
  },
  "充值页没有收款地址怎么办？": {
    "en": "What if the deposit page has no address?",
    "ja": "入金先が表示されない場合は？"
  },
  "当前故意显示待确认，不提供真实二维码。请勿向旧收款地址或陌生人地址转账。可先登录，创建模拟充值记录，再点击模拟链上确认体验入账；正式备用金地址需要平台核定。": {
    "en": "The address is intentionally pending and no real QR code is provided. Do not send to an old or unknown address. Sign in, create a demo deposit and simulate confirmation. Production reserve addresses require platform approval.",
    "ja": "現在は未確定と表示し、実際のQRコードは用意していません。旧アドレスや知らない相手に送金しないでください。ログイン後、デモ入金記録と確認操作を試せます。本番の準備金アドレスは確定が必要です。"
  },
  "一键兑换USDT会自动充值吗？": {
    "en": "Does Get USDT automatically deposit to the store?",
    "ja": "USDT購入ボタンで自動入金されますか？"
  },
  "不会。按钮先显示指引，再由用户打开币安官方P2P。登录、身份验证、付款和地区可用性由币安处理，返回商城不代表已付款，不会自动增加商城余额。": {
    "en": "No. The button shows a guide and opens official Binance P2P at your choice. Binance handles sign-in, verification, payment and regional availability. Returning does not prove payment or credit the store.",
    "ja": "いいえ。ガイドの後に利用者がBinance公式P2Pを開きます。ログイン・本人確認・支払・地域別の利用可否はBinance側で扱います。戻るだけでは支払完了や残高反映になりません。"
  },
  "认购50USDT后获得什么？": {
    "en": "What does a 50 USDT subscription provide?",
    "ja": "50 USDTの申込内容は？"
  },
  "方案按0.01USDT每枚计5000ZC，锁定后最终销毁，不返还ZC；获得固定100OPOC总权益，一年释放。OPOC只用于商城消费，不能兑换ZC或USDT。页面操作均为模拟。": {
    "en": "At the planned 0.01 USDT price, it corresponds to 5,000 ZC, locked and ultimately burned with no ZC returned, plus a fixed 100 OPOC entitlement vested over one year. OPOC is for store purchases only, not ZC or USDT redemption. All page actions are simulated.",
    "ja": "計画上の価格0.01 USDTでは5,000 ZCに相当し、ロック後に最終的にバーンして返還しません。固定100 OPOCを1年で付与します。OPOCはストアの買い物専用で、ZC・USDTに交換できません。画面の操作はすべてデモです。"
  },
  "LP奖励和城市专项有什么区别？": {
    "en": "How do LP rewards differ from city rewards?",
    "ja": "LP報酬と都市報酬の違いは？"
  },
  "LP质押奖励预算为1亿ZC，三年按有效LP份额与时间分配。城市专项按可用OPOC资格与持有时间分配三年50万USDT等值ZC，初始预留5000万ZC。两项独立，不重复使用同一预算。": {
    "en": "LP staking has a 100 million ZC budget over three years, weighted by active LP shares and time. City rewards allocate a total 500,000 USDT-equivalent in ZC over three years using spendable OPOC eligibility and holding time, with an initial 50 million ZC reserve. The budgets are separate.",
    "ja": "LP報酬は1億ZCを3年間、有効LP持分と時間で配分します。都市報酬は利用可能OPOCの資格・保有時間に応じ、3年総額500,000 USDT相当をZCで配分し、初期5,000万ZCを確保します。予算は別々です。"
  },
  "为什么城市服务商资格会暂停？": {
    "en": "Why can city-provider eligibility pause?",
    "ja": "都市サービス事業者の資格が停止するのはなぜ？"
  },
  "资格只计已释放、未消费的OPOC。5000至不足10000为城市白名单；10000及以上为城市服务商；不足5000两类均暂停。待释放积分不计，消费会降低余额，退款恢复后重新判定。": {
    "en": "Only vested, unspent OPOC counts. From 5,000 to below 10,000 qualifies for the city whitelist; 10,000 or more for service provider; below 5,000 neither. Unvested points do not count. Spending lowers the balance; refunds trigger reassessment.",
    "ja": "付与済み・未使用OPOCのみを数えます。5,000以上10,000未満はホワイトリスト、10,000以上は事業者、5,000未満は両方停止です。付与予定分は含みません。消費で減り、返金後は再判定します。"
  },
  "城市专项是固定发完5000万ZC吗？": {
    "en": "Must all 50 million reserved ZC be distributed?",
    "ja": "準備した5,000万ZCを必ず配り切りますか？"
  },
  "不是。固定的是三年共50万USDT的记账额度，按日加权后用当次ZC价格折算。币价涨则所需ZC减少。5000万ZC只是0.01价格下的初始预留，真实取价和不足补足机制仍待落实。": {
    "en": "No. The fixed amount is the total three-year 500,000 USDT accounting budget, weighted daily and converted at each release price. Higher ZC prices require fewer tokens. The initial 50 million reserve assumes 0.01; live pricing and reserve top-up rules remain to be implemented.",
    "ja": "いいえ。固定するのは3年総額500,000 USDTの記帳枠です。日ごとの加重配分後、各回のZC価格で枚数を換算し、価格が上がれば必要枚数は減ります。初期5,000万ZCは0.01を前提とし、実際の取価・補充方法は未実装です。"
  },
  "历史投入4000USDT对应多少节点？": {
    "en": "How many shares does a historical 4,000 USDT investment represent?",
    "ja": "過去に4,000 USDT投資した場合は何口ですか？"
  },
  "1000USDT为1份算力，所以4000为4份，三年本息合计6000USDT等值ZC。10000为10份，三年15000USDT等值ZC。每次释放按当时价格换算；投资记录必须核定并绑定会员ID。": {
    "en": "Each 1,000 USDT is one share, so 4,000 is four shares and 6,000 USDT-equivalent in ZC over three years, including principal. 10,000 is ten shares and 15,000 equivalent. Releases use the then-current price; records must be verified and linked to a member ID.",
    "ja": "1,000 USDTを1口とするため4口で、3年間の元本・収益合計は6,000 USDT相当のZCです。10,000なら10口・15,000相当です。付与時点の価格で換算し、投資記録の確認と会員ID連携が必要です。"
  },
  "卖出ZC的20%如何分配？": {
    "en": "How is the 20% ZC sell fee allocated?",
    "ja": "ZC売却手数料20%の内訳は？"
  },
  "任何来源的ZC向指定BSC池卖出收20%：10%平台收益，10%换USDT并配对平台LP预留ZC增加底池。买入、普通转账和领取不收此卖出费。DEX费用、滑点、Gas另计；实际执行要由合约验收证明。": {
    "en": "Selling ZC from any source into designated BSC pools incurs 20%: 10% platform revenue and 10% converted to USDT and paired with reserved ZC to add LP. Buying, ordinary transfers and claims do not incur this fee. DEX fees, slippage and gas are separate. Contract acceptance must verify enforcement.",
    "ja": "取得経路を問わず指定BSCプールへの売却で20%を適用し、10%はプラットフォーム収入、10%はUSDTに換えて準備ZCとLPに追加します。購入・通常送金・受取は対象外です。DEX手数料・価格ずれ・Gasは別途です。実際の適用にはコントラクト検証が必要です。"
  },
  "为什么不能上传真实商品或领取ZC？": {
    "en": "Why are live uploads and ZC claims unavailable?",
    "ja": "実際の商品アップロードやZC受取ができないのは？"
  },
  "当前上传、资格鉴权、真实发币尚未接入，按钮会标记待开发。正式商品还需图片授权、完整成本、库存、物流税费、退换货与商家结算资料；不可把示意商品当成真实供货宣传。": {
    "en": "Production uploads, authorization and payouts are not connected. Live products need image rights, complete costs, inventory, shipping, taxes, returns and merchant settlement details. Do not promote sample items as available stock.",
    "ja": "本番の商品登録・権限検証・送付は未導入です。実商品には画像の権利、総原価、在庫、配送、税、返品、店舗精算の資料が必要です。サンプルを実在庫として宣伝しないでください。"
  },
  "钱包连接失败或提示网络不对怎么办？": {
    "en": "What if wallet connection fails or the network is wrong?",
    "ja": "ウォレット接続失敗・ネットワーク違いの場合は？"
  },
  "确认使用支持浏览器钱包的环境，在钱包中自行切换BSC主网后重试；切换账户会清除旧余额。连接只读地址与余额，不发起授权、签名或转账。不要提供私钥、助记词、验证码。": {
    "en": "Use a compatible browser wallet, switch to BSC Mainnet in the wallet and retry. Account changes clear stale balances. This demo only reads addresses and balances; it does not sign, approve or transfer. Never share private keys, seed phrases or verification codes.",
    "ja": "対応するブラウザーウォレットを使い、ウォレット側でBSCメインネットへ切り替えて再試行してください。アカウント変更時は旧残高を消去します。デモはアドレス・残高の読み取りのみで、署名・承認・送金はしません。秘密鍵・シードフレーズ・認証コードは共有しないでください。"
  },
  "遇到其他问题如何反馈？": {
    "en": "How do I report another issue?",
    "ja": "その他の問題を報告するには？"
  },
  "公开客服为guiguowang99@gmail.com。记录页面、操作步骤、设备、语言和脱敏截图；不要发送密码或客户资产资料。Telegram、X、DeBox链接待平台确认，当前没有可用官方群跳转。": {
    "en": "Public support: guiguowang99@gmail.com. Record the page, steps, device, language and a redacted screenshot. Do not send passwords or customer asset records. Telegram, X and DeBox links await confirmation; no official group links are enabled.",
    "ja": "公開窓口はguiguowang99@gmail.comです。画面・手順・端末・言語と個人情報を隠した画像を記録してください。パスワードや顧客資産資料は送らないでください。Telegram・X・DeBoxの公式リンクは未確定です。"
  },
  "先了解测试范围": {
    "en": "Understand the demo scope",
    "ja": "デモの範囲を確認"
  },
  "本版用于技术、设计和宣发评审。页面展示最新模型，但不连接真实资金、正式用户或新合约。请在同一页面使用侧栏切换，避免刷新导致测试记录清空。": {
    "en": "This version is for technical, design and promotion review. It shows the latest rules but has no real funds, production users or new contracts. Navigate within the page; refresh clears demo records.",
    "ja": "技術・デザイン・広報レビュー用です。最新ルールを示しますが、実資金・本番会員・新コントラクトには接続していません。ページ内で移動し、再読み込みによる記録消去に注意してください。"
  },
  "注册登录与邀请": {
    "en": "Register, sign in and refer",
    "ja": "登録・ログイン・紹介"
  },
  "进入会员中心，邀请码可留空归属opo1，填写非零BSC测试地址与至少8位测试口令后注册。记下唯一会员ID，再查看我的邀请关系。退出后可用同页会员邀请码注册另一个测试地址体验直接邀请。": {
    "en": "In Member Center, leave referral blank for opo1. Enter a non-zero fictitious BSC address and an eight-character-or-longer test password. Note the unique ID and view referrals. Sign out to register another fictitious address with that code in the same page.",
    "ja": "会員センターで紹介欄を空欄にするとopo1になります。ゼロ以外の架空BSCアドレスと8文字以上のテスト用パスワードで登録し、固有IDを控えて紹介関係を確認します。同ページで別アドレスを紹介登録する体験もできます。"
  },
  "体验充值与资产查询": {
    "en": "Try deposits and balance lookup",
    "ja": "入金と残高照会を体験"
  },
  "登录后到USDT充值，输入模拟金额、创建待确认记录，再模拟链上确认。余额只加一次并归当前会员。我的资产显示商城模拟余额；真实浏览器钱包可主动只读同步BSC资产，两者不混加。": {
    "en": "After sign-in, create a pending demo deposit and simulate confirmation. Credit occurs once for the current member. My Assets shows the store demo ledger; an optional wallet connection reads BSC balances separately.",
    "ja": "ログイン後、デモ入金の確認待ち記録を作成し、確認を試します。現在の会員に1回だけ反映します。マイ資産のデモ台帳と、任意接続で取得するBSC残高は分けて表示します。"
  },
  "认购与OPOC释放": {
    "en": "Subscription and OPOC vesting",
    "ja": "申込とOPOC付与"
  },
  "在我的积分输入50USDT起的测试认购。系统演示锁定并销毁ZC，创建两倍等值OPOC，分一年释放。推进测试天数查看已释放与待释放；不能兑换代币或提现。": {
    "en": "In My Points, simulate a subscription from 50 USDT. The demo locks and burns ZC and creates a fixed 2× OPOC entitlement over one year. Advance demo days to see vested and unvested points. No token redemption or withdrawal is available.",
    "ja": "マイポイントで50 USDTから申込を試します。ZCのロック・バーンと2倍相当OPOCの1年付与を示します。デモ日数を進めて付与済み・予定を確認します。トークン交換・出金はできません。"
  },
  "购买与订单退款": {
    "en": "Purchases, orders and refunds",
    "ja": "購入・注文・返金"
  },
  "选择示意商品测试购买，按当前方案每件最多用OPOC抵扣50%，其余用模拟USDT。右侧订单入口查看支付组成，可模拟一次全额退款；真实商品价格按全部成本的2.5至3倍制定。": {
    "en": "Try a sample purchase. The current design allows OPOC up to 50% of each item, with the rest in demo USDT. Use the orders shortcut to inspect tender and try a single full refund. Live pricing uses complete cost × 2.5–3.",
    "ja": "サンプル購入では現在の設計上、各商品の50%までOPOCを使い、残りをデモUSDTで支払います。注文欄で内訳と1回限りの全額返金を試せます。本番価格は総原価×2.5〜3です。"
  },
  "LP与城市资格奖励": {
    "en": "LP and city eligibility rewards",
    "ja": "LPと都市資格報酬"
  },
  "LP页可模拟质押、推进时间及退出；退出停止新增LP奖励。左侧质押区下方是城市机制：5000可用OPOC白名单、10000服务商，余额下降暂停相应资格。展开计算器，调整持有小时和价格，查看固定50万USDT三年预算的日加权结果。": {
    "en": "Simulate LP staking, time and exit; exit stops new LP rewards. City rules sit below the staking controls: 5,000 spendable OPOC for whitelist, 10,000 for provider, with pauses below thresholds. Expand the calculator to vary holding hours and price against the fixed three-year 500,000 USDT budget.",
    "ja": "LPステーキング・時間経過・解除を試せます。解除後は新たなLP報酬が停止します。質押欄の下に都市ルールを配置し、利用可能5,000 OPOCでホワイトリスト、10,000で事業者、未達で停止します。計算欄で時間・価格を変えて3年総額500,000 USDTの日次配分を確認できます。"
  },
  "历史节点及分红": {
    "en": "Legacy nodes and distributions",
    "ja": "既存ノードと分配"
  },
  "侧栏进入节点及分红。1000USDT为1份，4000为4份，10000为10份；三年本息总权益为原投入的1.5倍USDT等值ZC。计算器按本次价格换算，投资记录和收取账号须正式核定。此处不接受新投资。": {
    "en": "Open Nodes & Distributions. 1,000 USDT is one share, 4,000 four and 10,000 ten. Total three-year principal and return equals 1.5× the original USDT in ZC, converted at each release price. Records and receiving accounts need verification. No new investment is accepted here.",
    "ja": "ノード・分配で、1,000 USDT＝1口、4,000＝4口、10,000＝10口を確認できます。3年の元本・収益合計は元投資の1.5倍USDT相当ZCで、各回の価格で換算します。記録と受取先の確認が必要です。新規投資は受け付けません。"
  },
  "管理员与商品上传边界": {
    "en": "Admin and upload boundaries",
    "ja": "管理者・商品登録の範囲"
  },
  "成本定价只在独立后台原型展示，该地址没有真实鉴权。正式上传须服务器核验资格、商家资料、商品合规和审核发布；城市服务商具体权限仍待确定，不能只隐藏按钮就视为权限控制。": {
    "en": "Cost pricing is shown only in the separate admin prototype, which has no production authorization. Live uploads require server-side eligibility, merchant data and product review. City-provider permissions remain to be defined; hiding a button is not access control.",
    "ja": "原価設定は別の管理画面デモのみで、本番権限は未実装です。本番登録にはサーバーの資格検証、店舗資料、商品審査が必要です。事業者の具体的権限は未定で、ボタンを隠すだけではアクセス制御になりません。"
  },
  "演示分享与发布要求": {
    "en": "Sharing and publication",
    "ja": "共有・公開時の注意"
  },
  "可以向技术及宣发人员分享当前公开测试链接。对外材料须标明模拟、未开通真实交易，不使用保证收益或已持牌等未经核实的说法。正式使用eni-opo.com前须完成交接、部署、数据与合约验收。": {
    "en": "Share the public demo link with technical and promotion teams. Materials must identify it as a simulation without live trading and avoid unverified claims of guaranteed returns or licensing. Handover, deployment, data and contract acceptance must precede live use of eni-opo.com.",
    "ja": "公開デモリンクを技術・広報担当に共有できます。実取引のないデモと明記し、保証利益や未確認の登録・認可をうたわないでください。eni-opo.comの本番利用には引継ぎ・配置・データ・コントラクトの検証が必要です。"
  },
  "常见问题及解决办法": {
    "en": "FAQ & troubleshooting",
    "ja": "よくある質問・対処法"
  },
  "详细使用说明": {
    "en": "Detailed user guide",
    "ja": "詳しい使い方"
  },
  "操作手册与经济模型": {
    "en": "User guide & economic model",
    "ja": "操作ガイド・経済モデル"
  },
  "点击问题展开处理办法。": {
    "en": "Expand a question to view the answer.",
    "ja": "質問を選ぶと回答が表示されます。"
  },
  "按下面顺序体验完整框架；所有资金操作均为模拟。": {
    "en": "Follow these steps to explore the framework. All financial actions are simulated.",
    "ja": "以下の順に全体を体験できます。資金に関する操作はすべてデモです。"
  },
  "奖励机制：三年共享50万USDT总额度，按合格可用OPOC及持有时间逐日加权，再按每次释放时ZC价格换算枚数。": {
    "en": "Reward rules: a shared 500,000 USDT budget over three years, weighted daily by eligible spendable OPOC and holding time, then converted into ZC at each release price.",
    "ja": "報酬ルール：3年間で500,000 USDTの総枠を共有し、対象の利用可能OPOCと保有時間により日ごとに加重配分します。各回の付与時点のZC価格で枚数を換算します。"
  },
  "展开资格与奖励模拟计算": {
    "en": "Open eligibility & reward calculator",
    "ja": "資格・報酬の計算デモを開く"
  },
  "两类用户共享固定美元奖励额度": {
    "en": "Fixed USD-equivalent reward budget shared by both groups",
    "ja": "両資格で共有する固定ドル換算報酬枠"
  },
  "50万 USDT等值ZC": {
    "en": "500,000 USDT-equivalent in ZC",
    "ja": "500,000 USDT相当のZC"
  },
  "初始专项代币预留": {
    "en": "Initial dedicated token reserve",
    "ja": "専用トークンの初期準備枠"
  },
  "城市奖励模拟ZC价格 / USDT": {
    "en": "Assumed ZC price for city rewards / USDT",
    "ja": "都市報酬の想定ZC価格 / USDT"
  },
  "模拟个人当日美元额度": {
    "en": "Your simulated daily USD-equivalent allocation",
    "ja": "自分のデモ日次ドル換算配分額"
  },
  "请输入有效的城市奖励模拟ZC价格": {
    "en": "Enter a valid assumed ZC price for city rewards.",
    "ja": "都市報酬の有効な想定ZC価格を入力してください。"
  },
  "个人每日权重为当天各合格时段的“可用OPOC × 持有小时”之和；低于5,000的时段不计权重，城市服务商不重复叠加白名单权重。每日份额为个人权重除以全体合格用户权重，再乘当日奖励池；不消耗OPOC。三年按1095天演示，每日全体额度约456.621005 USDT等值ZC，再按当次ZC价格换算枚数。正式起止日期、精度及无人合格时处理待确定。": {
    "en": "Daily weight is the sum of spendable OPOC × holding hours across eligible intervals. Intervals below 5,000 carry no weight; service providers are not counted again as whitelist members. Your share equals your weight divided by all eligible weight, multiplied by the daily budget; OPOC is not spent. Over the demo’s 1,095 days, the combined daily budget is about 456.621005 USDT-equivalent in ZC, converted at each release price. Actual dates, precision and days with no eligible users remain to be defined.",
    "ja": "日次ウェイトは対象時間帯ごとの「利用可能OPOC×保有時間」の合計です。5,000未満の時間帯は含めず、事業者にホワイトリスト分を重複加算しません。個人ウェイト÷全対象者のウェイト×日次枠で配分し、OPOCは消費しません。デモの1,095日では全体の日次枠は約456.621005 USDT相当とし、付与時のZC価格で枚数を換算します。正式期間、精度、対象者がいない日の処理は未定です。"
  },
  "50万USDT是三年总记账额度，不是每日额度。初始5000万ZC按0.01 USDT/ZC估算；币价上涨时所需枚数减少，下跌时可能需补足预留，补足来源与核定取价机制待落实。此处价格为手工模拟，不是实时报价，不使用会员USDT备用金。": {
    "en": "500,000 USDT is the total three-year accounting budget, not a daily amount. The initial 50 million ZC reserve assumes 0.01 USDT per ZC. Higher prices require fewer tokens; lower prices may require additional reserves. The top-up source and approved pricing method remain to be established. Prices here are manual assumptions, not live quotes. Member USDT reserves are not used.",
    "ja": "500,000 USDTは3年間の記帳総枠で、1日分ではありません。初期5,000万ZCは1 ZC＝0.01 USDTを前提とします。価格が上がれば必要枚数は減り、下がれば準備枠の補充が必要になる場合があります。補充元と承認済みの取価方法は未確定です。ここでの価格は手入力の想定値であり、リアルタイム価格ではありません。会員USDT準備金は使いません。"
  },
  "算力份额示例": {
    "en": "Node share examples",
    "ja": "算力口数の例"
  },
  "以上为卖出费前的ZC释放权益，兑换USDT时仍适用卖出费用。": {
    "en": "These are ZC release entitlements before sell fees. Selling for USDT is still subject to the sell fee.",
    "ja": "上記は売却手数料控除前のZC付与内容です。USDTへの売却時には所定の売却手数料がかかります。"
  },
  "节点及分红": {
    "en": "Nodes & distributions",
    "ja": "ノード・分配"
  },
  "历史投资专项：每1,000 USDT为1份算力，三年本息合计按1.5倍USDT等值ZC释放。": {
    "en": "Legacy investment allocation: each 1,000 USDT represents one node share. Total principal and return over three years is released as ZC equivalent to 1.5× the USDT invested.",
    "ja": "既存投資専用枠：1,000 USDTを算力1口とし、3年間の元本・収益の合計として投資USDTの1.5倍相当をZCで付与します。"
  },
  "历史投资与算力份额": {
    "en": "Legacy investments & node shares",
    "ja": "過去の投資・算力口数"
  },
  "相应会员账号": {
    "en": "Assigned member account",
    "ja": "対応する会員アカウント"
  },
  "历史投资须核对原始资料并绑定会员ID；填写本页演示金额不会新增真实算力或发币。本页不接受新投资。": {
    "en": "Original investment records must be verified and linked to a member ID. Entering demo amounts creates no real node shares or tokens. This page does not accept new investments.",
    "ja": "過去の投資の原資料を確認し、会員IDに紐付ける必要があります。デモ金額を入力しても実際の算力やトークンは増えません。このページで新規投資は受け付けません。"
  },
  "算力份数": {
    "en": "Node shares",
    "ja": "算力口数"
  },
  "三年本息总权益": {
    "en": "Three-year principal & return entitlement",
    "ja": "3年間の元本・収益の合計"
  },
  "以等值ZC分三年释放至核定账号。": {
    "en": "Released as equivalent ZC over three years to the verified account.",
    "ja": "相当額のZCを3年かけて確認済みアカウントに付与します。"
  },
  "1.5倍包含原投资对应的本金和收益，不额外返还原本金。每次释放时按当时价格折算ZC，三年ZC总枚数不预先固定。": {
    "en": "The 1.5× includes principal and return; principal is not returned separately. Each release converts to ZC at its then-current price, so the three-year ZC quantity is not fixed in advance.",
    "ja": "1.5倍には元本と収益の両方を含み、元本を別途返還しません。各回の付与時点の価格でZC数量を換算するため、3年間の総枚数は事前に固定しません。"
  },
  "节点释放计算器": {
    "en": "Node release calculator",
    "ja": "ノード付与額の計算"
  },
  "模拟历史投入 / USDT": {
    "en": "Simulated historical investment / USDT",
    "ja": "過去の投資額のシミュレーション / USDT"
  },
  "本次释放覆盖天数": {
    "en": "Days covered by this release",
    "ja": "今回の付与対象日数"
  },
  "本次模拟ZC价格 / USDT": {
    "en": "Assumed ZC price for this release / USDT",
    "ja": "今回の想定ZC価格 / USDT"
  },
  "本次释放USDT记账额度": {
    "en": "USDT accounting amount for this release",
    "ja": "今回の付与分のUSDT記帳額"
  },
  "本次模拟释放ZC": {
    "en": "Simulated ZC for this release",
    "ja": "今回のデモ付与ZC"
  },
  "按1095天匀速演示。真实价格需接入经核定的取价机制，模拟计算不发起领取或转账；不足1,000 USDT的零散投资处理待核定。": {
    "en": "The demo spreads releases evenly over 1,095 days. Live pricing needs an approved pricing mechanism. No claim or transfer is initiated. Treatment of investments not forming full 1,000 USDT shares remains to be verified.",
    "ja": "デモでは1,095日で均等に付与します。実際の価格取得には承認済みの仕組みが必要です。受取や送金は実行しません。1,000 USDT単位にならない端数投資の扱いは要確認です。"
  },
  "历史节点账号绑定与领取 · 待接入": {
    "en": "Legacy node account linking & claims · Not connected",
    "ja": "既存ノードのアカウント連携・受取は未導入"
  },
  "返回LP与奖励": {
    "en": "Back to LP & rewards",
    "ja": "LP・報酬へ戻る"
  },
  "专项预算与交易规则": {
    "en": "Dedicated allocation & trading rules",
    "ja": "専用予算・取引ルール"
  },
  "历史节点暂留1亿ZC，原投资统计后精准核定；剩余作为经平台授权使用的机动ZC。已核定的节点预留与平台机动额度分别管理。": {
    "en": "Initially earmark 100 million ZC for legacy nodes, with the exact amount determined after investment reconciliation. The surplus is discretionary ZC usable with platform approval. Verified node reserves and discretionary funds are managed separately.",
    "ja": "既存ノード向けに1億ZCを仮確保し、過去の投資集計後に正確な額を確定します。余剰は承認を受けて使用できる裁量ZCとし、確定したノード準備枠と分けて管理します。"
  },
  "所有来源ZC通过指定BSC池卖出统一收20%：10%平台收益，10%换USDT并配对5.49亿LP预留中的ZC增加底池；买入、普通转账和奖励领取不收这项卖出费。": {
    "en": "ZC from any source sold through designated BSC pools incurs a 20% fee: 10% platform revenue and 10% converted to USDT, paired with ZC from the 549 million LP reserve to add liquidity. Buying, normal transfers and reward claims do not incur this sell fee.",
    "ja": "取得経路を問わず指定BSCプールでのZC売却には20%の手数料を適用します。10%はプラットフォーム収入、10%はUSDTに換え、5.49億のLP準備枠のZCと組み合わせて流動性に追加します。購入・通常送金・報酬受取にはこの売却手数料を適用しません。"
  },
  "查看节点及分红": {
    "en": "View nodes & distributions",
    "ja": "ノード・分配を見る"
  },
  "请按1,000 USDT的整份投资输入；零散投资处理待核定": {
    "en": "Enter whole investment shares of 1,000 USDT; fractional investments require verification.",
    "ja": "1,000 USDT単位で入力してください。端数投資の扱いは要確認です。"
  },
  "请输入有效的释放天数和模拟ZC价格": {
    "en": "Enter valid release days and an assumed ZC price.",
    "ja": "有効な付与日数と想定ZC価格を入力してください。"
  },
  "模拟账号资格：城市服务商": {
    "en": "Demo account eligibility: city service provider",
    "ja": "デモアカウントの資格：都市サービス事業者"
  },
  "模拟账号资格：城市白名单": {
    "en": "Demo account eligibility: city whitelist",
    "ja": "デモアカウントの資格：都市サービスのホワイトリスト"
  },
  "模拟账号资格：未达门槛": {
    "en": "Demo account eligibility: below threshold",
    "ja": "デモアカウントの資格：条件未達"
  },
  "资格只按已释放、未消费的可用OPOC认定，待释放积分不计入。低于10,000时暂停服务商资格；仍满5,000时保留白名单资格，低于5,000时两类资格均暂停。": {
    "en": "Eligibility uses only vested, unspent OPOC; unvested points do not count. Below 10,000, service-provider eligibility pauses. At least 5,000 still qualifies for the whitelist; below 5,000 both tiers pause.",
    "ja": "資格は付与済み・未使用の利用可能OPOCのみで判定し、付与予定分は含めません。10,000未満で事業者資格を停止し、5,000以上ならホワイトリスト資格は継続します。5,000未満では両方を停止します。"
  },
  "演示输入不改变上方账号资格。正式资格由服务端校验；此页面不授予真实商品上传或管理权限，不增加真实余额。": {
    "en": "Demo inputs do not change the account eligibility above. Production eligibility requires server validation. This page grants no real product-upload or management permissions and adds no real balance.",
    "ja": "デモ入力では上記アカウントの資格は変わりません。本番の資格はサーバーで検証します。このページで実際のアップロード・管理権限を付与したり、実残高を増やしたりすることはありません。"
  },
  "模拟当日合格持有小时": {
    "en": "Eligible holding hours in the demo day",
    "ja": "デモ当日の対象保有時間"
  },
  "其他合格用户当日OPOC·小时总权重": {
    "en": "Other eligible users’ total OPOC-hours that day",
    "ja": "他の対象会員の当日のOPOC・時間の合計"
  },
  "模拟个人当日权重": {
    "en": "Your simulated daily weight",
    "ja": "自分のデモ日次ウェイト"
  },
  "模拟当日分配比例": {
    "en": "Your simulated daily allocation share",
    "ja": "デモの日次配分比率"
  },
  "模拟个人当日ZC奖励": {
    "en": "Your simulated daily ZC reward",
    "ja": "自分のデモ日次ZC報酬"
  },
  "请输入有效的日内持有小时和其他合格用户权重": {
    "en": "Enter valid daily holding hours and other eligible users’ weight.",
    "ja": "有効な当日の保有時間と他の対象会員のウェイトを入力してください。"
  },
  "个人每日权重为当天各合格时段的“可用OPOC × 持有小时”之和；低于5,000的时段不计权重，城市服务商不重复叠加白名单权重。每日份额为个人权重除以全体合格用户权重，再乘当日奖励池；不消耗OPOC。三年按1095天演示，每日基准约45,662.100457 ZC。正式起止日期、精度及无人合格时处理待确定。": {
    "en": "Daily weight is the sum of spendable OPOC × holding hours across eligible intervals. Intervals below 5,000 count as zero, and service providers do not also receive whitelist weight. Your reward equals your weight divided by all eligible weight, multiplied by that day’s pool; OPOC is not spent. The demo uses 1,095 days, about 45,662.100457 ZC daily. Actual dates, precision and periods with no eligible users remain to be defined.",
    "ja": "日次ウェイトは対象となる各時間帯の「利用可能OPOC×保有時間」の合計です。5,000未満の時間帯は0とし、事業者にホワイトリスト分を重複加算しません。個人ウェイト÷対象者全体のウェイト×当日の報酬枠で計算し、OPOCは消費しません。デモは1,095日、1日約45,662.100457 ZCとします。正式期間、精度、対象者がいない日の処理は未定です。"
  },
  "城市资格与专项奖励": {
    "en": "City eligibility & dedicated rewards",
    "ja": "都市サービス資格・専用報酬"
  },
  "OPOC持有资格与专项ZC奖励独立；OPOC本身仍只能商城消费，不兑换ZC或USDT。": {
    "en": "OPOC-based eligibility and dedicated ZC rewards are separate. OPOC itself remains for store purchases only, with no redemption for ZC or USDT.",
    "ja": "OPOC保有による資格と専用ZC報酬は別の仕組みです。OPOC自体はストアでの買い物専用で、ZC・USDTには交換できません。"
  },
  "城市白名单": {
    "en": "City whitelist",
    "ja": "都市サービスのホワイトリスト"
  },
  "持有至少5,000 OPOC": {
    "en": "Hold at least 5,000 OPOC",
    "ja": "5,000 OPOC以上を保有"
  },
  "取得商品上传资格。": {
    "en": "Eligible to upload products.",
    "ja": "商品をアップロードする資格を取得します。"
  },
  "持有至少10,000 OPOC": {
    "en": "Hold at least 10,000 OPOC",
    "ja": "10,000 OPOC以上を保有"
  },
  "取得城市服务商资格；具体管理权限待明确。": {
    "en": "Eligible as a city service provider; detailed management permissions remain to be defined.",
    "ja": "都市サービス事業者の資格を取得します。具体的な管理権限は未定です。"
  },
  "两类用户共用专项奖励池": {
    "en": "Shared rewards pool for both eligible groups",
    "ja": "両資格の共通報酬プール"
  },
  "5,000万 ZC": {
    "en": "50 million ZC",
    "ja": "5,000万ZC"
  },
  "分配周期": {
    "en": "Distribution period",
    "ja": "分配期間"
  },
  "三年 · 按日加权分配": {
    "en": "Three years · Weighted daily distribution",
    "ja": "3年間・日ごとの加重配分"
  },
  "从原LP预留划出": {
    "en": "Reallocated from the original LP reserve",
    "ja": "従来のLP準備枠から振替"
  },
  "5.99亿 − 0.5亿 = 5.49亿 ZC": {
    "en": "599 million − 50 million = 549 million ZC",
    "ja": "5.99億 − 0.5億 = 5.49億ZC"
  },
  "LP质押奖励1亿ZC、历史节点专项1亿ZC不变；本次划拨不增发代币，不使用会员USDT备用金。": {
    "en": "The 100 million ZC LP staking rewards and 100 million ZC legacy-node allocation remain unchanged. This reallocation creates no additional tokens and does not use member USDT reserves.",
    "ja": "LPステーキング報酬1億ZCと既存ノード専用1億ZCは変更しません。この振替でトークンを追加発行せず、会員USDT準備金も使いません。"
  },
  "当前账号可用OPOC": {
    "en": "Current account spendable OPOC",
    "ja": "現在のアカウントの利用可能OPOC"
  },
  "当前账号待释放OPOC": {
    "en": "Current account unvested OPOC",
    "ja": "現在のアカウントの付与予定OPOC"
  },
  "模拟OPOC持有量": {
    "en": "Simulated OPOC holdings",
    "ja": "シミュレーション用OPOC保有量"
  },
  "持有口径和奖励权重待确认。此处只演示数值门槛，不授予上传或管理权限，不增加真实余额。": {
    "en": "The holdings definition and reward weights await confirmation. This illustrates thresholds only; it grants no upload or management permissions and does not increase real balances.",
    "ja": "保有量の判定基準と報酬の重みは確認待ちです。ここでは数値の条件のみを示し、アップロード・管理権限の付与や実残高の増加は行いません。"
  },
  "三年按1095天演示，专项池每日基准约45,662.100457 ZC；个人分配取决于确认后的资格、权重及合格参与者总量，不是每人每日固定奖励。正式起止日期、精度及无人合格时处理待确定。": {
    "en": "Using 1,095 days for this three-year demo, the pool baseline is about 45,662.100457 ZC per day. Individual allocations depend on approved eligibility, weights and the total eligible participants; this is not a fixed daily reward per person. Actual dates, precision and periods with no eligible participants remain to be defined.",
    "ja": "3年間を1,095日とするデモでは、プール全体の1日分は約45,662.100457 ZCです。個人の配分は確定後の資格・重み・対象参加者全体により変わり、1人ごとの固定日次報酬ではありません。正式な期間、精度、対象者がいない期間の処理は未定です。"
  },
  "商品上传入口 · 资格验证待接入": {
    "en": "Product upload · Eligibility verification not connected",
    "ja": "商品アップロード・資格検証は未導入"
  },
  "模拟资格：城市服务商": {
    "en": "Simulated eligibility: city service provider",
    "ja": "シミュレーション結果：都市サービス事業者"
  },
  "模拟资格：城市白名单 · 可上传商品": {
    "en": "Simulated eligibility: city whitelist · Product upload",
    "ja": "シミュレーション結果：都市サービスのホワイトリスト・商品アップロード可"
  },
  "模拟资格：尚未达到5,000 OPOC门槛": {
    "en": "Simulated eligibility: below the 5,000 OPOC threshold",
    "ja": "シミュレーション結果：5,000 OPOCの条件未達"
  },
  "请输入有效的模拟OPOC持有量": {
    "en": "Enter valid simulated OPOC holdings.",
    "ja": "有効なシミュレーション用OPOC保有量を入力してください。"
  },
  "广告行业": {
    "en": "Advertising",
    "ja": "広告サービス"
  },
  "官方社群": {
    "en": "Official community",
    "ja": "公式コミュニティ"
  },
  "账号待提供": {
    "en": "Account pending",
    "ja": "アカウント未確定"
  },
  "官方群待提供": {
    "en": "Official group pending",
    "ja": "公式グループ未確定"
  },
  "官方链接确认后开放": {
    "en": "Links open after official confirmation",
    "ja": "公式リンクの確認後にご案内します"
  },
  "100 USDT内": {
    "en": "Under 100 USDT",
    "ja": "100 USDT以内"
  },
  "首页": {
    "en": "Home",
    "ja": "ホーム"
  },
  "商城": {
    "en": "Store",
    "ja": "ストア"
  },
  "OPO 商城": {
    "en": "OPO Store",
    "ja": "OPOストア"
  },
  "消费省 · 分享得 · 消费即积累": {
    "en": "Shop smart · Share more · Earn as you shop",
    "ja": "お得に買う・紹介する・買い物で貯める"
  },
  "商品分类": {
    "en": "Categories",
    "ja": "商品カテゴリー"
  },
  "我的积分": {
    "en": "My points",
    "ja": "マイポイント"
  },
  "我的资产": {
    "en": "My assets",
    "ja": "マイ資産"
  },
  "我的订单": {
    "en": "My orders",
    "ja": "注文履歴"
  },
  "LP与奖励": {
    "en": "LP & rewards",
    "ja": "LP・報酬"
  },
  "LP 与奖励": {
    "en": "LP & rewards",
    "ja": "LP・報酬"
  },
  "USDT充值": {
    "en": "USDT deposit",
    "ja": "USDT入金"
  },
  "会员中心": {
    "en": "Member center",
    "ja": "会員センター"
  },
  "会员登录 / 注册": {
    "en": "Sign in / Register",
    "ja": "ログイン・会員登録"
  },
  "会员登录与注册": {
    "en": "Member sign-in & registration",
    "ja": "会員ログイン・新規登録"
  },
  "查询USDT和积分": {
    "en": "Check USDT and points",
    "ja": "USDT・ポイント照会"
  },
  "查询资产": {
    "en": "Check balance",
    "ja": "残高を確認"
  },
  "USDT / 积分支付": {
    "en": "USDT / points payment",
    "ja": "USDT・ポイント決済"
  },
  "连接钱包": {
    "en": "Connect wallet",
    "ja": "ウォレット接続"
  },
  "当前网络": {
    "en": "Network",
    "ja": "ネットワーク"
  },
  "重置测试": {
    "en": "Reset demo",
    "ja": "デモをリセット"
  },
  "界面与功能展示": {
    "en": "Pages & features",
    "ja": "画面・機能一覧"
  },
  "OPO2.0规则测试 · 全部为模拟商品与账本 · 不接受真实付款": {
    "en": "OPO 2.0 demo · Sample products and balances only · No real payments",
    "ja": "OPO 2.0デモ・商品と残高はすべてサンプルです・実際の決済は行えません"
  },
  "OPO 商城 · 2.0规则测试": {
    "en": "OPO Store · 2.0 demo",
    "ja": "OPOストア・2.0デモ"
  },
  "OPO 商城 · 基于原2.0界面删减整合": {
    "en": "OPO Store · Refined from the original 2.0 design",
    "ja": "OPOストア・従来の2.0デザインを整理・統合"
  },
  "功能测试版 · 非真实交易 · 刷新重置": {
    "en": "Interactive demo · No real transactions · Refresh to reset",
    "ja": "機能デモ・実際の取引は行いません・再読み込みでリセット"
  },
  "居家生活": {
    "en": "Home & living",
    "ja": "暮らし・生活用品"
  },
  "数码配件": {
    "en": "Electronics & accessories",
    "ja": "デジタル機器・アクセサリー"
  },
  "服饰箱包": {
    "en": "Fashion & bags",
    "ja": "ファッション・バッグ"
  },
  "美妆个护": {
    "en": "Beauty & personal care",
    "ja": "美容・パーソナルケア"
  },
  "运动户外": {
    "en": "Sports & outdoors",
    "ja": "スポーツ・アウトドア"
  },
  "食品饮料": {
    "en": "Food & drinks",
    "ja": "食品・飲料"
  },
  "钱包与支付": {
    "en": "Wallet & payments",
    "ja": "ウォレット・決済"
  },
  "积分释放": {
    "en": "Points vesting",
    "ja": "ポイントの付与スケジュール"
  },
  "订单与退款": {
    "en": "Orders & refunds",
    "ja": "注文・返金"
  },
  "正式域名：eni-opo.com": {
    "en": "Planned production domain: eni-opo.com",
    "ja": "本番ドメイン：eni-opo.com"
  },
  "当前为模拟展示": {
    "en": "Demo preview only",
    "ja": "デモ画面です"
  },
  "AI 数字导购": {
    "en": "AI shopping guide",
    "ja": "AIショッピングガイド"
  },
  "演示": {
    "en": "Demo",
    "ja": "デモ"
  },
  "告诉我预算，我来帮你选好物。": {
    "en": "Tell me your budget to find a good match.",
    "ja": "予算に合わせて商品を探しましょう。"
  },
  "100 USDT 内": {
    "en": "Under 100 USDT",
    "ja": "100 USDT以内"
  },
  "积分好物": {
    "en": "Shop with points",
    "ja": "ポイントでお買い物"
  },
  "想找什么好物？": {
    "en": "What are you looking for?",
    "ja": "どんな商品をお探しですか？"
  },
  "导购搜索": {
    "en": "Shopping guide search",
    "ja": "商品ガイド検索"
  },
  "搜索商品": {
    "en": "Search products",
    "ja": "商品を検索"
  },
  "本地筛选演示，未接入外部AI。": {
    "en": "Local filtering demo; no external AI connected.",
    "ja": "ローカル検索のデモです。外部AIには接続していません。"
  },
  "不会用钱包？": {
    "en": "New to wallets?",
    "ja": "ウォレットの操作が不安ですか？"
  },
  "也能轻松开始": {
    "en": "Start with a simple walkthrough",
    "ja": "初めてでも簡単に体験できます"
  },
  "先体验商品与积分支付，再选择适合你的付款方式。": {
    "en": "Explore products and points, then choose how to pay.",
    "ja": "商品とポイント決済を体験してから、支払方法を選べます。"
  },
  "一键兑换 USDT ↗": {
    "en": "Get USDT ↗",
    "ja": "USDTを購入 ↗"
  },
  "前往币安官方P2P；不自动成交或扣款。": {
    "en": "Opens official Binance P2P; no automatic order or charge.",
    "ja": "Binance公式P2Pへ移動します。自動注文・引き落としは行いません。"
  },
  "我的消费积分": {
    "en": "My shopping points",
    "ja": "お買い物ポイント"
  },
  "仅商城购物 · 不兑换代币": {
    "en": "Store purchases only · Not redeemable for tokens",
    "ja": "ストア内の買い物専用・トークン交換不可"
  },
  "查看积分释放": {
    "en": "View points schedule",
    "ja": "ポイント付与予定を確認"
  },
  "生态认购": {
    "en": "Ecosystem subscription",
    "ja": "エコシステム申込"
  },
  "50 USDT起 · 两倍消费积分 · 一年释放": {
    "en": "From 50 USDT · 2× shopping points · Vested over one year",
    "ja": "50 USDTから・2倍相当の買い物ポイント・1年かけて付与"
  },
  "查看规则与测试": {
    "en": "View rules & demo",
    "ja": "ルール・デモを見る"
  },
  "关闭弹窗": {
    "en": "Close dialog",
    "ja": "ダイアログを閉じる"
  },
  "商城导航": {
    "en": "Store navigation",
    "ja": "ストアナビゲーション"
  },
  "好物好价，积分也能花": {
    "en": "Great finds. Fair prices. Pay with points.",
    "ja": "お気に入りをお得に。ポイントも使えます。"
  },
  "支持 USDT 与 OPOC 组合支付": {
    "en": "Pay with a combination of USDT and OPOC",
    "ja": "USDTとOPOCの併用払いに対応"
  },
  "发现今日好物": {
    "en": "Explore today's picks",
    "ja": "おすすめ商品を見る"
  },
  "精选好物": {
    "en": "Featured products",
    "ja": "おすすめ商品"
  },
  "品质生活 · 积分也能花": {
    "en": "Everyday essentials · Points welcome",
    "ja": "暮らしのアイテムに、ポイントも使えます"
  },
  "查看更多": {
    "en": "View more",
    "ja": "もっと見る"
  },
  "更多": {
    "en": "More",
    "ja": "その他"
  },
  "全部": {
    "en": "All",
    "ja": "すべて"
  },
  "OPO 无线蓝牙耳机": {
    "en": "OPO wireless Bluetooth earbuds",
    "ja": "OPOワイヤレスBluetoothイヤホン"
  },
  "OPO 保温杯 500ml": {
    "en": "OPO insulated tumbler 500 ml",
    "ja": "OPO保温タンブラー 500ml"
  },
  "OPO 麦饭石不粘锅": {
    "en": "OPO non-stick coated pan",
    "ja": "OPO麦飯石コーティングフライパン"
  },
  "OPO 帆布托特包": {
    "en": "OPO canvas tote bag",
    "ja": "OPOキャンバストートバッグ"
  },
  "OPO 运动跑鞋": {
    "en": "OPO running shoes",
    "ja": "OPOランニングシューズ"
  },
  "OPO 护眼台灯": {
    "en": "OPO desk lamp",
    "ja": "OPOデスクライト"
  },
  "品质生活 · 原版示意商品": {
    "en": "Everyday essentials · Original sample item",
    "ja": "暮らしのアイテム・従来版のサンプル商品"
  },
  "示意商品 · 不在售": {
    "en": "Sample item · Not for sale",
    "ja": "サンプル商品・販売していません"
  },
  "支持 OPOC 抵扣": {
    "en": "OPOC points accepted",
    "ja": "OPOCポイント利用可能"
  },
  "测试购买": {
    "en": "Try a demo purchase",
    "ja": "購入を試す"
  },
  "此分类暂无测试商品，不以虚构供货替代真实目录。": {
    "en": "No sample items in this category. Real listings require confirmed stock.",
    "ja": "このカテゴリーにはサンプル商品がありません。実際の商品掲載には在庫確認が必要です。"
  },
  "保留原版商品展示；图片与成本均为测试资料。": {
    "en": "Original product layout; images and costs are samples.",
    "ja": "従来の商品レイアウトです。画像と原価はテスト用です。"
  },
  "搜索测试商品": {
    "en": "Search sample products",
    "ja": "サンプル商品を検索"
  },
  "当前分类：": {
    "en": "Category: ",
    "ja": "カテゴリー："
  },
  "查看全部": {
    "en": "View all",
    "ja": "すべて見る"
  },
  "正式商品价格须使用完整真实成本。": {
    "en": "Production prices must use complete, verified costs.",
    "ja": "本番の商品価格は、実際の総原価に基づいて設定します。"
  },
  "测试现金余额": {
    "en": "Demo USDT balance",
    "ja": "デモUSDT残高"
  },
  "模拟账本 · 不代表钱包资产": {
    "en": "Demo ledger · Not your wallet balance",
    "ja": "デモ台帳・実際のウォレット残高ではありません"
  },
  "可消费积分": {
    "en": "Spendable points",
    "ja": "利用可能ポイント"
  },
  "仅购物抵扣 · 不兑换代币": {
    "en": "Shopping discount only · No token redemption",
    "ja": "買い物の割引専用・トークン交換不可"
  },
  "待释放积分": {
    "en": "Unvested points",
    "ja": "付与予定ポイント"
  },
  "固定两倍权益 · 一年释放": {
    "en": "Fixed 2× points entitlement · One-year vesting",
    "ja": "2倍相当の固定ポイント・1年かけて付与"
  },
  "钱包关联": {
    "en": "Wallet connection",
    "ja": "ウォレット連携"
  },
  "已连接 · 只读": {
    "en": "Connected · Read only",
    "ja": "接続済み・読み取り専用"
  },
  "尚未连接": {
    "en": "Not connected",
    "ja": "未接続"
  },
  "账户余额不会用作客户ID": {
    "en": "Balances are not used as member IDs",
    "ja": "残高を会員IDとして使用しません"
  },
  "客户账号、链上钱包和交易所账户分别管理。": {
    "en": "Member account, on-chain wallet and exchange account are separate.",
    "ja": "会員アカウント、オンチェーンウォレット、取引所口座は別々に管理します。"
  },
  "BSC 钱包 · 只读同步": {
    "en": "BSC wallet · Read-only sync",
    "ja": "BSCウォレット・読み取り専用の同期"
  },
  "连接仅请求地址与余额，不发起签名、授权、转账或销毁。": {
    "en": "Connection only reads addresses and balances. It does not sign, approve, transfer or burn assets.",
    "ja": "接続ではアドレスと残高のみ読み取ります。署名・承認・送金・バーンは行いません。"
  },
  "商城测试客户ID": {
    "en": "Demo member ID",
    "ja": "デモ会員ID"
  },
  "演示访客": {
    "en": "Demo guest",
    "ja": "デモゲスト"
  },
  "关联钱包地址": {
    "en": "Linked wallet address",
    "ja": "連携ウォレットアドレス"
  },
  "未连接": {
    "en": "Not connected",
    "ja": "未接続"
  },
  "钱包关联ID（未验证）": {
    "en": "Wallet reference ID (unverified)",
    "ja": "ウォレット連携ID（未検証）"
  },
  "地址仅作关联展示；未完成签名验证，不作为正式登录身份。": {
    "en": "Address is shown as a reference only. Ownership has not been verified by signature, so it is not a production login.",
    "ja": "アドレスは参照表示のみです。署名による所有確認がないため、本番のログイン認証には使えません。"
  },
  "余额是资产数量，不能作为稳定的客户ID。": {
    "en": "A balance is an asset amount, not a permanent member ID.",
    "ja": "残高は資産の数量であり、固定の会員IDにはできません。"
  },
  "链上USDT": {
    "en": "On-chain USDT",
    "ja": "オンチェーンUSDT"
  },
  "链上ZC": {
    "en": "On-chain ZC",
    "ja": "オンチェーンZC"
  },
  "链上BNB": {
    "en": "On-chain BNB",
    "ja": "オンチェーンBNB"
  },
  "区块": {
    "en": "Block",
    "ja": "ブロック"
  },
  "查询时间": {
    "en": "Checked at",
    "ja": "照会時刻"
  },
  "不计入模拟可支付余额": {
    "en": "Not included in the spendable demo balance",
    "ja": "デモの利用可能残高には含まれません"
  },
  "暂无同步数据。币安资金账户余额不能通过链上钱包地址读取。": {
    "en": "No synced data. A wallet address cannot reveal your Binance funding account balance.",
    "ja": "同期データがありません。ウォレットアドレスからBinance資金口座の残高は取得できません。"
  },
  "重新同步钱包余额": {
    "en": "Refresh wallet balances",
    "ja": "ウォレット残高を再取得"
  },
  "连接并只读同步": {
    "en": "Connect & read balances",
    "ja": "接続して残高を取得"
  },
  "断开页面关联": {
    "en": "Disconnect from this page",
    "ja": "このページの接続を解除"
  },
  "不熟悉钱包也能开始": {
    "en": "A simple guide for new wallet users",
    "ja": "ウォレット初心者向けガイド"
  },
  "币安买入USDT、钱包充值与商城付款是不同步骤。OPO不会向你索取币安密码、验证码或助记词。": {
    "en": "Buying USDT on Binance, depositing and paying in the store are separate steps. OPO never asks for your Binance password, verification code or seed phrase.",
    "ja": "BinanceでのUSDT購入、入金、ストア決済は別々の手順です。OPOがBinanceのパスワード・認証コード・シードフレーズを求めることはありません。"
  },
  "一键进入币安P2P": {
    "en": "Open Binance P2P",
    "ja": "Binance P2Pを開く"
  },
  "在币安完成身份验证、选择可用付款方式并买入USDT。": {
    "en": "Complete verification on Binance, choose an available payment method and buy USDT.",
    "ja": "Binanceで本人確認を完了し、利用可能な支払方法を選んでUSDTを購入します。"
  },
  "按支付渠道完成付款": {
    "en": "Pay through your chosen channel",
    "ja": "選択した方法で支払う"
  },
  "未来若接入Binance Pay，可由币安账户确认支付；当前未开通商户接口。": {
    "en": "A future Binance Pay integration could let you confirm payment in Binance. The merchant integration is not enabled.",
    "ja": "将来Binance Payを導入した場合、Binance口座から決済確認ができます。現在、加盟店連携は未導入です。"
  },
  "商城独立核对付款": {
    "en": "Store independently verifies payment",
    "ja": "ストア側で入金を確認"
  },
  "跳转成功不等于已付款，也不会自动增加本站余额。": {
    "en": "Opening an external page is not proof of payment and does not increase your store balance.",
    "ja": "外部ページへの移動だけでは支払完了にならず、ストア残高も増えません。"
  },
  "我的积分权益": {
    "en": "My points entitlement",
    "ja": "ポイント付与内容"
  },
  "固定认购价值×2，仅商城购物；不兑换ZC或USDT。": {
    "en": "Fixed points equal to 2× the subscription value, for store purchases only. No redemption for ZC or USDT.",
    "ja": "申込額の2倍相当を固定ポイントとして付与します。ストア内の買い物専用で、ZC・USDTには交換できません。"
  },
  "体验认购与积分计划": {
    "en": "Try the subscription & points plan",
    "ja": "申込・ポイントプランを体験"
  },
  "模拟认购金额 / USDT": {
    "en": "Demo subscription amount / USDT",
    "ja": "デモ申込額 / USDT"
  },
  "模拟认购 · 不转移真实资产": {
    "en": "Simulate subscription · No real assets moved",
    "ja": "申込をシミュレーション・実際の資産移動なし"
  },
  "支付确认→锁定及销毁确认→建立固定积分权益。本页全部为测试事件，不生成真实交易哈希。": {
    "en": "Payment confirmed → lock and burn confirmed → fixed points entitlement created. These are demo events with no real transaction hash.",
    "ja": "入金確認→ロック・バーン確認→固定ポイント設定。すべてテストイベントで、実際の取引ハッシュは発行しません。"
  },
  "按批次查看释放": {
    "en": "Vesting by subscription batch",
    "ja": "申込ごとの付与予定"
  },
  "总权益 / 已释放": {
    "en": "Total entitlement / Vested",
    "ja": "付与総額 / 付与済み"
  },
  "按累计应得减已释放计算尾差。释放完成不代表剩余积分自动到期；到期规则尚未确定。": {
    "en": "Rounding uses cumulative entitlement less points already vested. Vesting completion does not automatically expire unused points; expiry rules are not yet defined.",
    "ja": "累計付与額から付与済み額を差し引いて端数を調整します。付与完了後も未使用ポイントが自動失効するわけではなく、有効期限は未定です。"
  },
  "刷新页面将重置；不改变真实日期或资产": {
    "en": "Refresh resets the demo; real dates and assets are unchanged",
    "ja": "再読み込みでデモをリセットします。実際の日付や資産は変わりません"
  },
  "推进1天": {
    "en": "Advance 1 day",
    "ja": "1日進める"
  },
  "推进30天": {
    "en": "Advance 30 days",
    "ja": "30日進める"
  },
  "推进365天": {
    "en": "Advance 365 days",
    "ja": "365日進める"
  },
  "节点和LP奖励仍为三年；以下份额、仓位和奖励均为模拟。": {
    "en": "Node and LP rewards vest over three years. Shares, positions and rewards below are simulated.",
    "ja": "ノード・LP報酬の期間は3年です。以下の持分、ポジション、報酬はシミュレーションです。"
  },
  "LP奖励总预算": {
    "en": "Total LP rewards budget",
    "ja": "LP報酬の総予算"
  },
  "1亿 ZC": {
    "en": "100 million ZC",
    "ja": "1億ZC"
  },
  "全体合格参与者 · 三年": {
    "en": "All eligible participants · Three years",
    "ja": "対象参加者全員・3年間"
  },
  "我的质押份额": {
    "en": "My staked LP shares",
    "ja": "自分のLPステーキング持分"
  },
  "模拟池另有1,000 LP参与": {
    "en": "Demo pool has 1,000 other LP shares",
    "ja": "デモプールには他の参加者の1,000 LPがあります"
  },
  "已累计LP奖励": {
    "en": "Accrued LP rewards",
    "ja": "獲得済みLP報酬"
  },
  "退出保留已累计奖励": {
    "en": "Accrued rewards remain after exit",
    "ja": "解除後も獲得済み報酬は保持"
  },
  "历史节点专项预算": {
    "en": "Legacy node allocation",
    "ja": "既存ノード専用枠"
  },
  "1,000 USDT / 算力节点 · 三年释放": {
    "en": "1,000 USDT per legacy node · Three-year vesting",
    "ja": "既存の算力ノード1口1,000 USDT・3年で付与"
  },
  "按真实份额与时间分配": {
    "en": "Weighted by active shares and time",
    "ja": "有効持分と保有時間で加重配分"
  },
  "增加模拟质押 / LP凭证份额": {
    "en": "Add demo stake / LP token shares",
    "ja": "デモステーキングを追加 / LP持分"
  },
  "模拟质押LP": {
    "en": "Simulate LP staking",
    "ja": "LPステーキングを試す"
  },
  "模拟退出全部LP": {
    "en": "Simulate unstaking all LP",
    "ja": "すべてのLP解除を試す"
  },
  "按每个时段“个人有效质押LP÷总有效质押LP”计算；不再除以5.49亿ZC。该示例使用V2式同质LP份额。": {
    "en": "Each interval uses your active staked LP divided by all active staked LP, not by the 549 million ZC reserve. This demo uses V2-style fungible LP shares.",
    "ja": "各期間の「自分の有効LP持分÷全体の有効LP持分」で計算します。5.99億ZCは分母に使いません。このデモはV2型の同質LP持分を想定しています。"
  },
  "分配与费用规则": {
    "en": "Allocations & fees",
    "ja": "配分・手数料ルール"
  },
  "初始池": {
    "en": "Initial pool",
    "ja": "初期プール"
  },
  "100万 ZC + 1万 USDT": {
    "en": "1 million ZC + 10,000 USDT",
    "ja": "100万ZC＋1万USDT"
  },
  "后续LP代币预留": {
    "en": "ZC reserved for future LP",
    "ja": "将来のLP追加用ZC"
  },
  "5.49亿 ZC，尚需配对资金": {
    "en": "549 million ZC; matching funds still required",
    "ja": "5.99億ZC・ペア資金が別途必要"
  },
  "历史节点专项奖励": {
    "en": "Legacy node rewards",
    "ja": "既存ノード専用報酬"
  },
  "1亿 ZC / 三年": {
    "en": "100 million ZC / Three years",
    "ja": "1億ZC / 3年間"
  },
  "所有来源ZC的指定池卖出费": {
    "en": "Sell fee for ZC from any source in designated pools",
    "ja": "取得経路を問わず指定プールでのZC売却手数料"
  },
  "20% = 10%平台收益 + 10%配对ZC增加LP": {
    "en": "20% = 10% platform revenue + 10% paired with ZC to add LP",
    "ja": "20%＝10%はプラットフォーム収入＋10%はZCと組み合わせてLPに追加"
  },
  "买入 / 转账 / 领取": {
    "en": "Buy / transfer / claim",
    "ja": "購入・送金・受取"
  },
  "不收该20%费用": {
    "en": "This 20% sell fee does not apply",
    "ja": "この20%売却手数料の対象外"
  },
  "历史节点专项奖励 · 延续原主要投资人权益": {
    "en": "Legacy node rewards · Continuing original investor entitlements",
    "ja": "既存ノード専用報酬・従来の主要投資家の権利を継続"
  },
  "本专项仅面向核定的前期公链投资节点，不向新用户开放认购，不与新私募预算混用。每1,000 USDT历史投资对应1个算力节点；三年本息合计1,500 USDT等值ZC，从独立1亿ZC预算中空投并分三年释放，不另返1,000 USDT。": {
    "en": "This allocation is only for verified original public-chain investor nodes. It is not open to new subscriptions or mixed with the new private-sale budget. Each historical 1,000 USDT corresponds to one node. Its total principal-and-return entitlement over three years is 1,500 USDT-equivalent in ZC, paid from the separate 100 million ZC allocation; no additional 1,000 USDT is returned.",
    "ja": "確認済みの初期パブリックチェーン投資ノードのみを対象とします。新規申込は受け付けず、新規プライベートセール予算とは分離します。過去の投資1,000 USDTにつき1ノードとし、3年間の元本・収益の合計は1,500 USDT相当のZCです。独立した1億ZC枠から3年で付与し、1,000 USDTを別途返還することはありません。"
  },
  "1.5倍为三年本息总权益，不是每年1.5倍。每次释放按当时ZC价格折算数量，不预先固定三年ZC总枚数。节点名单及不足1,000 USDT的处理待确认。": {
    "en": "The 1.5× is the total principal and return over three years, not an annual multiple. Each release converts at the ZC price at that time; the total ZC quantity is not fixed in advance. The node list and investments below 1,000 USDT still need confirmation.",
    "ja": "1.5倍は3年間の元本・収益の合計であり、年ごとに1.5倍ではありません。各回の付与時点のZC価格で数量を換算するため、3年間のZC総枚数は事前に固定しません。対象一覧と1,000 USDT未満の扱いは要確認です。"
  },
  "模拟本次释放天数": {
    "en": "Days covered by this demo release",
    "ja": "今回のデモ付与の対象日数"
  },
  "模拟本次ZC价格 / USDT（手工假设，非实时报价）": {
    "en": "Assumed ZC price / USDT (manual input, not live)",
    "ja": "今回の想定ZC価格 / USDT（手入力・リアルタイム価格ではありません）"
  },
  "仅演示一个节点，按1095天匀速分配；正式起止日期和取价机制待确定。不创建领取记录，不转移ZC。": {
    "en": "One-node illustration, evenly allocated over 1,095 days. Actual dates and pricing method remain to be defined. No claim record or ZC transfer is created.",
    "ja": "1ノードを1,095日で均等配分する例です。正式な開始・終了日と取価方法は未定です。受取記録の作成やZC送付は行いません。"
  },
  "历史节点先暂留1亿ZC，待原始投资统计后精准核定专项预留；剩余ZC作为平台机动额度，经平台授权使用。因释放按当时价格折算，专项储备须动态核对，不能占用已分配权益或会员USDT备用金。": {
    "en": "Initially earmark 100 million ZC for legacy nodes, then determine the exact reserve after reconciling original investments. The surplus becomes a platform discretionary allocation, usable with platform authorization. As releases use current prices, reserves require ongoing reconciliation and must not consume allocated member entitlements or member USDT reserves.",
    "ja": "既存ノード向けにまず1億ZCを仮確保し、過去の投資集計後に専用準備額を確定します。余剰ZCはプラットフォームの裁量枠とし、承認を受けて使用します。付与時点の価格で換算するため、準備額を継続的に照合し、割当済み権利や会員USDT準備金を流用しないものとします。"
  },
  "正式领取待节点核定与合约接入": {
    "en": "Live claims await node verification and contract integration",
    "ja": "本番の受取はノード確定・コントラクト接続後"
  },
  "未连接真实节点或LP合约。LP的1亿奖励预算与历史节点专项1亿预算独立。新私募认购奖励为两倍等值OPOC，一年释放；LP与历史节点专项独立；卖出费用中的10%换为USDT，再配对5.49亿预留中的ZC增加LP。LP凭证归属与锁定规则待确认，不调用会员USDT备用金。": {
    "en": "No live node or LP contract is connected. The 100 million ZC LP budget and 100 million ZC legacy-node budget are separate. New private-sale subscriptions earn 2× equivalent OPOC over one year, independently of these allocations. Of each sale, 10% is converted to USDT and paired with ZC from the 549 million reserve to add LP. LP ownership and locking rules remain to be confirmed. Member USDT reserves are not used.",
    "ja": "実際のノード・LPコントラクトには未接続です。LP報酬1億ZCと既存ノード専用1億ZCは独立しています。新規プライベートセールは2倍相当のOPOCを1年で付与し、これらとは分離します。売却額の10%をUSDTに換え、5.99億の準備枠のZCと組み合わせてLPに追加します。LP証票の帰属・ロック条件は未定で、会員USDT準備金は使用しません。"
  },
  "测试订单仅保存在当前页面内存；退款原路恢复模拟现金与积分。": {
    "en": "Demo orders live only in this page's memory. Refunds restore the original demo USDT and points.",
    "ja": "デモ注文はこのページのメモリ内にのみ保存します。返金時は元のデモUSDTとポイントを戻します。"
  },
  "测试已退款": {
    "en": "Demo refunded",
    "ja": "デモ返金済み"
  },
  "测试已支付": {
    "en": "Demo paid",
    "ja": "デモ支払済み"
  },
  "模拟全额退款": {
    "en": "Simulate full refund",
    "ja": "全額返金を試す"
  },
  "还没有测试订单，去挑选一件好物吧。": {
    "en": "No demo orders yet. Explore a sample product.",
    "ja": "デモ注文はまだありません。サンプル商品を選んでみましょう。"
  },
  "浏览测试商品": {
    "en": "Browse sample products",
    "ja": "サンプル商品を見る"
  },
  "模拟账号仅保存在当前页面内存；刷新即清空。请使用虚构资料和测试口令。": {
    "en": "Demo accounts are stored only in this page's memory and cleared on refresh. Use fictitious details and a test password.",
    "ja": "デモアカウントはこのページのメモリ内にのみ保存し、再読み込みで消えます。架空の情報とテスト用パスワードを使用してください。"
  },
  "我的会员资料": {
    "en": "My member profile",
    "ja": "会員情報"
  },
  "唯一会员ID": {
    "en": "Unique member ID",
    "ja": "固有の会員ID"
  },
  "绑定钱包（尚未验证所有权）": {
    "en": "Registered wallet (ownership not verified)",
    "ja": "登録ウォレット（所有確認前）"
  },
  "注册邀请码": {
    "en": "Referral code used at registration",
    "ja": "登録時の紹介コード"
  },
  "会员ID不随余额改变。该账号独立保存本次演示的充值、积分和订单。": {
    "en": "Your member ID does not change with your balance. This account keeps its own deposits, points and orders within the demo.",
    "ja": "残高が変わっても会員IDは変わりません。デモ内の入金・ポイント・注文はアカウントごとに管理します。"
  },
  "体验充值": {
    "en": "Try a demo deposit",
    "ja": "入金を試す"
  },
  "退出模拟账号": {
    "en": "Sign out of demo account",
    "ja": "デモアカウントからログアウト"
  },
  "注册会员": {
    "en": "Register as a member",
    "ja": "新規会員登録"
  },
  "邀请码（选填，支持平台或本页会员邀请码）": {
    "en": "Referral code (optional; platform or member code from this page)",
    "ja": "紹介コード（任意・プラットフォームまたは同ページ内の会員コード）"
  },
  "BSC钱包地址（必填）": {
    "en": "BSC wallet address (required)",
    "ja": "BSCウォレットアドレス（必須）"
  },
  "0x开头的42位公开地址": {
    "en": "42-character public address starting with 0x",
    "ja": "0xで始まる42文字の公開アドレス"
  },
  "测试口令（至少8位，请勿使用真实密码）": {
    "en": "Test password (8+ characters; do not use a real password)",
    "ja": "テスト用パスワード（8文字以上・実際のパスワードは使用しないでください）"
  },
  "模拟注册并生成会员ID": {
    "en": "Register a demo account & generate ID",
    "ja": "デモ登録・会員ID発行"
  },
  "未填写邀请码时自动归属平台邀请码 opo1。演示可填写虚构地址：0x1111111111111111111111111111111111111111。正式注册还需服务端验证邀请码、钱包所有权和唯一性。": {
    "en": "A blank referral code defaults to platform code opo1. Example fictitious address: 0x1111111111111111111111111111111111111111. Production registration still requires server-side checks of the code, wallet ownership and uniqueness.",
    "ja": "紹介コードが空欄の場合はプラットフォームコードopo1を使用します。架空アドレスの例：0x1111111111111111111111111111111111111111。本番登録にはコード、ウォレット所有者、重複のサーバー側検証が必要です。"
  },
  "会员登录": {
    "en": "Member sign-in",
    "ja": "会員ログイン"
  },
  "会员ID": {
    "en": "Member ID",
    "ja": "会員ID"
  },
  "测试口令": {
    "en": "Test password",
    "ja": "テスト用パスワード"
  },
  "模拟登录": {
    "en": "Demo sign-in",
    "ja": "デモにログイン"
  },
  "只识别当前页面中已注册的模拟账号；不连接正式会员库。": {
    "en": "Only accounts registered in this page are recognized. No production member database is connected.",
    "ja": "同ページ内で登録したデモアカウントのみ認識します。本番の会員データベースには接続していません。"
  },
  "我的邀请关系": {
    "en": "My referrals",
    "ja": "紹介関係"
  },
  "我的专属邀请码": {
    "en": "My referral code",
    "ja": "自分の紹介コード"
  },
  "我的邀请人": {
    "en": "Referred by",
    "ja": "紹介者"
  },
  "平台 · opo1": {
    "en": "Platform · opo1",
    "ja": "プラットフォーム・opo1"
  },
  "待核验": {
    "en": "Pending verification",
    "ja": "確認待ち"
  },
  "直接邀请会员": {
    "en": "Direct referrals",
    "ja": "直接紹介した会員"
  },
  "已邀请会员": {
    "en": "Referred member",
    "ja": "紹介した会員"
  },
  "暂无直接邀请会员。可在同一页面退出后，以此邀请码注册另一个虚构钱包体验关系。": {
    "en": "No direct referrals yet. To try it, sign out and register another fictitious wallet in the same page using this code.",
    "ja": "直接紹介した会員はまだいません。同ページ内でログアウトし、このコードと別の架空ウォレットで登録すると試せます。"
  },
  "只显示当前会员的直接邀请关系；不展示他人余额、完整钱包或联系方式，不产生额外返佣。关系在注册时记录，本原型不提供修改。": {
    "en": "Only your direct referrals are shown. Other members' balances, full wallets and contact details are hidden. No extra commission is created. Relationships are recorded at registration and cannot be edited in this demo.",
    "ja": "ログイン中の会員の直接紹介関係のみ表示します。他人の残高・ウォレット全体・連絡先は表示せず、追加の紹介報酬も発生しません。関係は登録時に記録し、このデモでは変更できません。"
  },
  "登录后查看我的邀请码、邀请人和直接邀请会员。": {
    "en": "Sign in to see your referral code, referrer and direct referrals.",
    "ja": "ログインすると、自分の紹介コード・紹介者・直接紹介会員を確認できます。"
  },
  "登录 / 注册": {
    "en": "Sign in / Register",
    "ja": "ログイン・新規登録"
  },
  "模拟关系仅存当前页面，刷新清空；当前没有跨设备邀请验证、正式推广链接或历史会员关系迁移。": {
    "en": "Referral data is stored only in this page and cleared on refresh. Cross-device referral validation, live referral links and historical member migration are not connected.",
    "ja": "紹介関係は同ページ内のみ保存し、再読み込みで消えます。別端末からの紹介検証、本番の紹介リンク、旧会員の関係移行には未対応です。"
  },
  "BSC / BEP20 · 平台充值地址待确认 · 本页禁止真实转账。": {
    "en": "BSC / BEP20 · Platform deposit address pending · Do not send real funds.",
    "ja": "BSC / BEP20・入金先アドレス未確定・実際の送金はしないでください。"
  },
  "充值到我的会员账号": {
    "en": "Deposit to my member account",
    "ja": "会員アカウントへ入金"
  },
  "平台充值钱包 = 会员USDT备用金钱包": {
    "en": "Platform deposit wallet = member USDT reserve wallet",
    "ja": "プラットフォーム入金ウォレット＝会員USDT準備金ウォレット"
  },
  "备用金对应全网会员ID的USDT余额合计，不按会员人数计算。会员余额属于平台账本，钱包保存对应链上资金。": {
    "en": "The reserve corresponds to the sum of all member USDT balances, not the number of members. Member balances are ledger entries; the wallet holds the corresponding on-chain funds.",
    "ja": "準備金は会員数ではなく、全会員IDのUSDT残高合計に対応します。会員残高は台帳上で管理し、対応するオンチェーン資金をウォレットで保管します。"
  },
  "本页模拟会员余额合计": {
    "en": "Total demo member balances on this page",
    "ja": "このページのデモ会員残高合計"
  },
  "真实链上备用金": {
    "en": "Live on-chain reserves",
    "ja": "実際のオンチェーン準備金"
  },
  "未接入，无法核验储备及差额": {
    "en": "Not connected; reserve balance and difference unverified",
    "ja": "未接続・準備金と差額は未検証"
  },
  "这里只统计当前页面创建的模拟会员，不是全网真实数据。正式版须按同一对账时点核对余额、待确认款和待结算款，防重复入账。": {
    "en": "This total covers only demo members created on this page, not live network-wide data. Production reconciliation must use the same cutoff time for balances, pending deposits and settlements, and prevent duplicate credits.",
    "ja": "同ページで作成したデモ会員のみの集計で、全体の実データではありません。本番では同一時点で残高・確認待ち入金・未精算額を照合し、二重計上を防ぎます。"
  },
  "当前会员ID": {
    "en": "Current member ID",
    "ja": "現在の会員ID"
  },
  "请先注册或登录": {
    "en": "Please register or sign in",
    "ja": "登録またはログインしてください"
  },
  "平台充值钱包地址：待确认": {
    "en": "Platform deposit wallet address: pending confirmation",
    "ja": "プラットフォーム入金先：未確定"
  },
  "不显示可转账地址，不生成真实收款二维码。原公开收款地址尚未被确认用于充值。": {
    "en": "No usable deposit address or payment QR code is shown. The earlier public payment address has not been approved for deposits.",
    "ja": "送金可能なアドレスや入金用QRコードは表示しません。以前の公開受取先を入金先として使うことは未確認です。"
  },
  "登录并核对会员ID和绑定钱包": {
    "en": "Sign in and check your member ID and registered wallet",
    "ja": "ログインし、会員IDと登録ウォレットを確認"
  },
  "正式版将显示审核后的BSC充值地址与网络": {
    "en": "Production will show the approved BSC deposit address and network",
    "ja": "本番では承認済みのBSC入金先とネットワークを表示"
  },
  "等待链上确认并匹配会员后，记入商城USDT余额": {
    "en": "Credit store USDT after on-chain confirmation and member matching",
    "ja": "チェーン上の確認と会員照合後、ストアUSDT残高へ反映"
  },
  "链上钱包余额、商城余额、币安余额分别显示；不重复计入。": {
    "en": "On-chain, store and Binance balances are separate and not counted twice.",
    "ja": "オンチェーン・ストア・Binanceの残高は分けて表示し、重複計上しません。"
  },
  "模拟充值数量 / USDT": {
    "en": "Demo deposit amount / USDT",
    "ja": "デモ入金額 / USDT"
  },
  "创建模拟充值记录（不入账）": {
    "en": "Create demo deposit (not credited yet)",
    "ja": "デモ入金記録を作成（残高には未反映）"
  },
  "先登录 / 注册": {
    "en": "Sign in / Register first",
    "ja": "先にログイン・登録"
  },
  "我的充值记录": {
    "en": "My deposit history",
    "ja": "入金履歴"
  },
  "模拟已入账": {
    "en": "Demo credited",
    "ja": "デモ反映済み"
  },
  "模拟等待链上确认": {
    "en": "Demo awaiting confirmation",
    "ja": "デモ確認待ち"
  },
  "模拟链上确认": {
    "en": "Simulate on-chain confirmation",
    "ja": "チェーン上の確認を試す"
  },
  "暂无模拟充值。": {
    "en": "No demo deposits yet.",
    "ja": "デモ入金はまだありません。"
  },
  "演示按钮由页面模拟链上监听结果；正式系统不能允许用户自行确认入账，需校验代币、网络、金额、来源、确认数，并防重复及链重组。": {
    "en": "The button simulates a chain monitor result. In production, users cannot approve their own credits. Token, network, amount, source and confirmation depth must be verified, with duplicate and reorganization protection.",
    "ja": "ボタンはチェーン監視結果のシミュレーションです。本番では利用者自身で残高反映を確定できません。トークン・ネットワーク・金額・送付元・確認数を検証し、二重計上とチェーン再編に対応する必要があります。"
  },
  "该功能仅在管理后台提供": {
    "en": "Available only in the admin console",
    "ja": "管理画面専用の機能です"
  },
  "成本与定价只在管理后台提供，商城前台不可访问。": {
    "en": "Costs and pricing tools are available only in the admin console.",
    "ja": "原価・価格設定は管理画面専用で、ストア側からは利用できません。"
  },
  "一键兑换 USDT · 币安 P2P": {
    "en": "Get USDT · Binance P2P",
    "ja": "USDT購入・Binance P2P"
  },
  "该按钮带你进入币安官方P2P买入USDT页面。身份验证、可用地区、报价和付款均由币安及交易对手处理，OPO不会自动下单或代付。": {
    "en": "This opens the official Binance P2P page for buying USDT. Verification, regional availability, quotes and payment are handled by Binance and counterparties. OPO does not place orders or pay for you.",
    "ja": "Binance公式P2PのUSDT購入ページへ移動します。本人確認、利用可能地域、レート、支払はBinanceと取引相手が対応します。OPOによる自動注文や立替払いはありません。"
  },
  "登录币安并完成身份验证": {
    "en": "Sign in to Binance and complete verification",
    "ja": "Binanceにログインして本人確認"
  },
  "选择当地可用的付款方式，核对对手方与订单": {
    "en": "Choose a locally available payment method and verify the counterparty and order",
    "ja": "地域で利用できる支払方法を選び、取引相手と注文を確認"
  },
  "完成付款后，由币安确认资产到账": {
    "en": "Binance confirms receipt after payment",
    "ja": "支払後、Binance側で資産の受取を確認"
  },
  "币安资金账户余额与BSC钱包余额不同；返回商城不会自动记账。": {
    "en": "Binance funding and BSC wallet balances are different. Returning here does not credit your store account.",
    "ja": "Binance資金口座とBSCウォレットの残高は別です。ストアに戻るだけでは残高に反映されません。"
  },
  "前往币安官方P2P ↗": {
    "en": "Open official Binance P2P ↗",
    "ja": "Binance公式P2Pへ ↗"
  },
  "OPOC不能在此兑换USDT。ZC是否被交易所支持也不能据此认定。若当地不可用，请勿绕过地区限制。": {
    "en": "OPOC cannot be converted to USDT here. This link does not imply that ZC is supported by the exchange. Do not bypass regional restrictions.",
    "ja": "ここでOPOCをUSDTに交換することはできません。また、ZCが取引所で扱われていることを示すものでもありません。地域制限を回避しないでください。"
  },
  "选择你熟悉的支付方式": {
    "en": "Choose a payment method you know",
    "ja": "使い慣れた支払方法を選ぶ"
  },
  "普通用户：模拟普通支付": {
    "en": "New users: try standard payment",
    "ja": "一般利用者：通常決済を体験"
  },
  "不需要链上钱包，先体验订单和积分抵扣；真实银行卡/本地支付渠道尚未接入。": {
    "en": "No on-chain wallet needed to try orders and points discounts. Real card and local payment channels are not connected.",
    "ja": "ウォレットなしで注文やポイント利用を試せます。実際のカード・地域別決済は未導入です。"
  },
  "币安用户：Binance Pay路线": {
    "en": "Binance users: Binance Pay option",
    "ja": "Binance利用者：Binance Pay"
  },
  "未来可使用币安账户确认，需先开通合规商户、签名回调及订单核验；当前只能模拟。": {
    "en": "A future integration could confirm payment through Binance. Merchant onboarding, signed callbacks and order verification are still required; this is only a demo.",
    "ja": "将来はBinance口座で決済確認できますが、加盟店登録、署名付き通知、注文照合が必要です。現在はデモのみです。"
  },
  "钱包用户：BSC钱包路线": {
    "en": "Wallet users: BSC wallet option",
    "ja": "ウォレット利用者：BSCウォレット"
  },
  "当前只读余额。真实转账、Gas和订单确认尚未接入。": {
    "en": "Balances are read only. Live transfers, gas handling and order confirmation are not integrated.",
    "ja": "現在は残高の読み取りのみです。実際の送金、Gas処理、注文確定は未導入です。"
  },
  "了解如何在币安买USDT ↗": {
    "en": "How to buy USDT on Binance ↗",
    "ja": "BinanceでUSDTを買う方法 ↗"
  },
  "测试结算 ·": {
    "en": "Demo checkout ·",
    "ja": "デモ決済・"
  },
  "商品测试价": {
    "en": "Demo product price",
    "ja": "デモ商品価格"
  },
  "可用消费积分": {
    "en": "Available shopping points",
    "ja": "利用可能な買い物ポイント"
  },
  "使用OPOC（每款商品最多抵扣50%）": {
    "en": "Use OPOC (up to 50% of each item's price)",
    "ja": "OPOCを使う（商品価格の50%まで）"
  },
  "测试支付方式": {
    "en": "Demo payment method",
    "ja": "デモ支払方法"
  },
  "普通支付体验 · 模拟": {
    "en": "Standard payment · Demo",
    "ja": "通常決済・デモ"
  },
  "Binance Pay · 未接入，仅模拟": {
    "en": "Binance Pay · Not connected, demo only",
    "ja": "Binance Pay・未導入、デモのみ"
  },
  "BSC钱包 · 未接入，仅模拟": {
    "en": "BSC wallet · Not connected, demo only",
    "ja": "BSCウォレット・未導入、デモのみ"
  },
  "确认模拟支付": {
    "en": "Confirm demo payment",
    "ja": "デモ決済を確定"
  },
  "我不会用钱包，查看指引": {
    "en": "New to wallets? View the guide",
    "ja": "ウォレット初心者向けガイド"
  },
  "不扣银行卡、不操作币安账户、不发送链上交易。当前测试现金余额": {
    "en": "No card charge, Binance operation or on-chain transaction. Demo USDT balance: ",
    "ja": "カード請求・Binance操作・チェーン取引は行いません。デモUSDT残高："
  },
  "积分抵扣": {
    "en": "Points discount",
    "ja": "ポイント利用額"
  },
  "需支付": {
    "en": "Amount to pay",
    "ja": "支払額"
  },
  "模拟余额不足；外部买币不会自动增加测试余额": {
    "en": "Insufficient demo balance. Buying externally does not credit it automatically.",
    "ja": "デモ残高が不足しています。外部で購入しても自動で増えません。"
  },
  "模拟订单已生成，未产生真实支付": {
    "en": "Demo order created; no real payment made.",
    "ja": "デモ注文を作成しました。実際の支払はありません。"
  },
  "已退出；本页模拟账号可再次登录": {
    "en": "Signed out. You can sign in again within this page.",
    "ja": "ログアウトしました。同ページ内で再度ログインできます。"
  },
  "邀请码无效，请填写本页会员邀请码，或留空归属平台 opo1": {
    "en": "Invalid referral code. Use a member code from this page, or leave blank for platform opo1.",
    "ja": "紹介コードが無効です。同ページの会員コードを入力するか、空欄でプラットフォームopo1を使用してください。"
  },
  "请输入有效的非零BSC钱包地址": {
    "en": "Enter a valid, non-zero BSC wallet address.",
    "ja": "有効なゼロ以外のBSCウォレットアドレスを入力してください。"
  },
  "该钱包已注册，请使用原会员ID登录": {
    "en": "This wallet is already registered. Sign in with its existing member ID.",
    "ja": "このウォレットは登録済みです。既存の会員IDでログインしてください。"
  },
  "该钱包已注册": {
    "en": "This wallet is already registered.",
    "ja": "このウォレットは登録済みです。"
  },
  "测试口令至少8位": {
    "en": "Test password must have at least 8 characters.",
    "ja": "テスト用パスワードは8文字以上で入力してください。"
  },
  "模拟注册完成，已生成独立会员ID": {
    "en": "Demo registration complete. A unique member ID has been created.",
    "ja": "デモ登録が完了し、固有の会員IDを発行しました。"
  },
  "会员ID或测试口令不正确": {
    "en": "Incorrect member ID or test password.",
    "ja": "会員IDまたはテスト用パスワードが違います。"
  },
  "已登录模拟会员": {
    "en": "Signed in to demo account.",
    "ja": "デモアカウントにログインしました。"
  },
  "充值数量须在0.01至100万USDT之间": {
    "en": "Deposit must be between 0.01 and 1,000,000 USDT.",
    "ja": "入金額は0.01〜1,000,000 USDTで入力してください。"
  },
  "模拟充值记录已创建，余额尚未增加": {
    "en": "Demo deposit created. The balance has not increased yet.",
    "ja": "デモ入金記録を作成しました。残高にはまだ反映していません。"
  },
  "模拟链上确认完成，已计入当前会员USDT余额": {
    "en": "Demo confirmation complete. USDT credited to the current member.",
    "ja": "デモの確認が完了し、現在の会員のUSDT残高に反映しました。"
  },
  "模拟现金余额不足": {
    "en": "Insufficient demo USDT balance.",
    "ja": "デモUSDT残高が不足しています。"
  },
  "超过2亿ZC模拟认购额度": {
    "en": "The 200 million ZC demo subscription cap would be exceeded.",
    "ja": "デモ申込枠の2億ZCを超えます。"
  },
  "已建立模拟销毁和积分计划，真实链上未操作": {
    "en": "Demo burn and points plan created. No on-chain action occurred.",
    "ja": "デモのバーン・ポイント予定を作成しました。実際のチェーン操作はありません。"
  },
  "请输入1至1095天和不低于0.000001的模拟价格": {
    "en": "Enter 1–1,095 days and an assumed price of at least 0.000001.",
    "ja": "日数は1〜1,095、想定価格は0.000001以上で入力してください。"
  },
  "请输入1至100万之间的整数LP份额": {
    "en": "Enter a whole LP amount between 1 and 1,000,000.",
    "ja": "LP持分は1〜1,000,000の整数で入力してください。"
  },
  "模拟LP已质押，不使用钱包资产": {
    "en": "Demo LP staked. No wallet assets were used.",
    "ja": "デモLPをステーキングしました。ウォレット資産は使っていません。"
  },
  "已模拟退出；累计奖励保留，停止新增奖励": {
    "en": "Demo LP unstaked. Accrued rewards remain; no new rewards accrue.",
    "ja": "デモLPを解除しました。獲得済み報酬は保持し、新たな報酬は発生しません。"
  },
  "模拟领取已记录，未转移真实ZC": {
    "en": "Demo claim recorded. No real ZC transferred.",
    "ja": "デモ受取を記録しました。実際のZC送付はありません。"
  },
  "模拟退款完成，现金及已用积分原路恢复": {
    "en": "Demo refund complete. Original USDT and spent points restored.",
    "ja": "デモ返金が完了し、元のUSDTと使用ポイントを戻しました。"
  },
  "已清除页面关联；钱包应用授权可在钱包中管理": {
    "en": "Page connection cleared. Manage wallet app permissions in your wallet.",
    "ja": "ページの接続を解除しました。アプリの接続権限はウォレットで管理できます。"
  },
  "当前浏览器没有检测到钱包": {
    "en": "No wallet detected in this browser",
    "ja": "このブラウザーでウォレットが見つかりません"
  },
  "你可以先完成模拟购物，无需安装钱包。真实钱包连接需要支持EIP-1193的浏览器钱包；手机扫码连接和Binance Pay尚未接入。": {
    "en": "You can try shopping without installing a wallet. Live connection needs an EIP-1193 browser wallet. Mobile QR connection and Binance Pay are not integrated.",
    "ja": "ウォレットをインストールせずに買い物を体験できます。実際の接続にはEIP-1193対応ブラウザーウォレットが必要です。スマホのQR接続とBinance Payは未導入です。"
  },
  "查看普通用户支付指引": {
    "en": "View the payment guide",
    "ja": "支払ガイドを見る"
  },
  "钱包地址无效": {
    "en": "Invalid wallet address.",
    "ja": "ウォレットアドレスが無効です。"
  },
  "当前钱包与会员绑定地址不一致": {
    "en": "Connected wallet does not match the registered member wallet.",
    "ja": "接続中のウォレットが会員の登録アドレスと一致しません。"
  },
  "请在钱包中自行切换到BSC主网，再同步余额": {
    "en": "Switch to BSC Mainnet in your wallet, then refresh balances.",
    "ja": "ウォレットでBSCメインネットに切り替えてから残高を取得してください。"
  },
  "区块信息无效": {
    "en": "Invalid block information.",
    "ja": "ブロック情報が無効です。"
  },
  "查询期间钱包账户或链已变化，请重新同步": {
    "en": "Wallet account or network changed during the query. Please refresh.",
    "ja": "照会中にアカウントまたはネットワークが変わりました。再取得してください。"
  },
  "只读余额已同步，测试余额未改变": {
    "en": "Read-only balances refreshed. Demo balance is unchanged.",
    "ja": "読み取り専用の残高を取得しました。デモ残高は変わりません。"
  },
  "已取消连接钱包": {
    "en": "Wallet connection cancelled.",
    "ja": "ウォレット接続をキャンセルしました。"
  },
  "钱包暂不可用": {
    "en": "Wallet temporarily unavailable.",
    "ja": "現在ウォレットを利用できません。"
  },
  "仅支持当前登录会员ID或其绑定钱包查询；不查询他人资产": {
    "en": "Only your signed-in member ID or registered wallet can be checked. Other members' assets are private.",
    "ja": "ログイン中の会員IDまたは登録ウォレットのみ照会できます。他人の資産は照会できません。"
  },
  "显示商城模拟USDT和积分；链上余额需主动连接钱包读取": {
    "en": "Showing demo store USDT and points. Connect your wallet to read on-chain balances.",
    "ja": "ストアのデモUSDT・ポイントを表示しています。チェーン残高はウォレットを接続して取得してください。"
  },
  "测试时间已推进，积分与LP奖励已重算": {
    "en": "Demo time advanced. Points and LP rewards recalculated.",
    "ja": "デモ時間を進め、ポイントとLP報酬を再計算しました。"
  },
  "锁定后模拟销毁": {
    "en": "Demo burn after lock",
    "ja": "ロック後にデモのバーン処理"
  },
  "一年固定消费权益": {
    "en": "Fixed one-year shopping entitlement",
    "ja": "1年間の固定買い物ポイント"
  },
  "总权益÷365，按累计精度释放；不是每天两倍。": {
    "en": "Total entitlement ÷ 365, vested cumulatively with rounding; not 2× every day.",
    "ja": "付与総額÷365を累計で計算し端数を調整します。毎日2倍になるわけではありません。"
  },
  "金额最多两位小数": {
    "en": "Amount may have up to two decimal places.",
    "ja": "金額は小数点以下2桁までです。"
  },
  "金额超出测试范围": {
    "en": "Amount exceeds the demo limit.",
    "ja": "金額がデモの上限を超えています。"
  },
  "成本须非负，倍率须在2.5至3之间": {
    "en": "Cost cannot be negative; multiplier must be between 2.5 and 3.",
    "ja": "原価は0以上、倍率は2.5〜3で入力してください。"
  },
  "认购测试金额50 USDT起，单次不超过剩余额度": {
    "en": "Demo subscriptions start at 50 USDT and cannot exceed the available allocation.",
    "ja": "デモ申込は50 USDTからで、残りの枠を超えることはできません。"
  },
  "测试时间不能倒退": {
    "en": "Demo time cannot go backwards.",
    "ja": "デモ時間を戻すことはできません。"
  },
  "钱包返回了无效余额": {
    "en": "Wallet returned an invalid balance.",
    "ja": "ウォレットから無効な残高が返されました。"
  },
  "OPO · 后台定价原型": {
    "en": "OPO · Admin pricing demo",
    "ja": "OPO・管理者向け価格設定デモ"
  },
  "管理后台界面原型 · 仅合成数据 · 不是真实登录或权限系统": {
    "en": "Admin UI demo · Synthetic data only · No production authentication",
    "ja": "管理画面デモ・合成データのみ・本番の認証機能ではありません"
  },
  "OPO 商家管理后台": {
    "en": "OPO Merchant Console",
    "ja": "OPO店舗管理画面"
  },
  "当前为管理员视角演示": {
    "en": "Administrator-view demo",
    "ja": "管理者視点のデモ"
  },
  "返回功能展示": {
    "en": "Back to features",
    "ja": "機能一覧へ戻る"
  },
  "查看商城前台": {
    "en": "Open storefront",
    "ja": "ストアを見る"
  },
  "商品成本与定价": {
    "en": "Product costs & pricing",
    "ja": "商品原価・価格設定"
  },
  "方案选择：定价工作台仅在管理后台提供，前台不展示。白名单/城市服务商暂不开放前台定价权限；正式开发时使用服务端管理员鉴权、MFA及审计。这个原型地址不具备真实权限控制，不使用真实成本资料。": {
    "en": "Pricing tools are restricted to the admin design; they are not shown in the storefront. Whitelisted uploaders and city service providers do not have storefront pricing access. Production requires server-side administrator authorization, MFA and auditing. This demo has no real access control and contains no real cost data.",
    "ja": "価格設定は管理画面のみに配置し、ストア側には表示しません。ホワイトリスト登録者・都市サービス事業者にも、ストア側の価格設定権限は付与しません。本番ではサーバー側の管理者認証、MFA、監査が必要です。このデモには実際のアクセス制御や原価データはありません。"
  },
  "全部成本录入": {
    "en": "Enter all costs",
    "ja": "総原価を入力"
  },
  "售价倍数": {
    "en": "Price multiplier",
    "ja": "販売価格の倍率"
  },
  "预览定价结果（不发布）": {
    "en": "Preview price (do not publish)",
    "ja": "価格をプレビュー（公開しません）"
  },
  "售价与积分抵扣结余": {
    "en": "Price & balance after points",
    "ja": "価格・ポイント利用後の収支"
  },
  "所有成本×2.5～3；结余基于所填成本，不保证实际利润。当前不修改前台商品或正式商品库。": {
    "en": "All costs × 2.5–3. The result uses entered costs and does not guarantee profit. Storefront products and the live catalog are unchanged.",
    "ja": "総原価×2.5〜3で試算します。入力原価に基づく結果であり、実際の利益を保証しません。ストア商品や本番の商品データは変更しません。"
  },
  "采购成本": {
    "en": "Purchase cost",
    "ja": "仕入原価"
  },
  "物流费用": {
    "en": "Shipping cost",
    "ja": "物流費"
  },
  "包装费用": {
    "en": "Packaging cost",
    "ja": "梱包費"
  },
  "税费": {
    "en": "Taxes & duties",
    "ja": "税金・関税"
  },
  "售后储备": {
    "en": "After-sales reserve",
    "ja": "アフターサービス準備費"
  },
  "运营成本": {
    "en": "Operating cost",
    "ja": "運営費"
  },
  "支付手续费": {
    "en": "Payment processing fee",
    "ja": "決済手数料"
  },
  "获客及其他摊销": {
    "en": "Acquisition & other allocated costs",
    "ja": "集客費・その他の按分費用"
  },
  "成本总和超出测试范围": {
    "en": "Total cost exceeds the demo limit.",
    "ja": "総原価がデモの上限を超えています。"
  },
  "建议测试售价": {
    "en": "Suggested demo price",
    "ja": "デモの参考販売価格"
  },
  "全部成本": {
    "en": "Total cost",
    "ja": "総原価"
  },
  "积分抵扣上限": {
    "en": "Maximum points discount",
    "ja": "ポイント利用上限"
  },
  "最大抵扣后现金收入": {
    "en": "USDT revenue after maximum points use",
    "ja": "ポイント最大利用後のUSDT売上"
  },
  "现金减已填全部成本": {
    "en": "USDT revenue less entered total costs",
    "ja": "USDT売上から入力済み総原価を控除"
  },
  "已生成界面定价预览，未发布商品、未修改后台数据。": {
    "en": "Price preview generated. No products published or backend data changed.",
    "ja": "価格プレビューを作成しました。商品公開や管理データの変更は行っていません。"
  },
  "OPO2.0 · 界面功能审核": {
    "en": "OPO 2.0 · UI review",
    "ja": "OPO 2.0・画面・機能レビュー"
  },
  "先审核界面与功能，再确认业务开发 · 仅模拟展示 · 未接入正式业务或推送GitHub": {
    "en": "Review pages and features before production development · Demo only · No live business integration or GitHub push",
    "ja": "画面・機能を確認してから本番開発へ・デモのみ・本番接続やGitHubへの反映は行っていません"
  },
  "OPO2.0 界面功能展示": {
    "en": "OPO 2.0 pages & features",
    "ja": "OPO 2.0 画面・機能一覧"
  },
  "进入可点击商城": {
    "en": "Open interactive storefront",
    "ja": "操作できるストアへ"
  },
  "沿用原版OPO商城，在原界面上删减整合": {
    "en": "Original OPO design, refined and integrated",
    "ja": "従来のOPOデザインを整理・統合"
  },
  "保留红白配色、积分查询、分类侧栏、原商品图片、大图和数字导购区。当前是交互原型，真实业务后端、支付/合约集成和生产权限待你确认后开发。": {
    "en": "The original red-and-white design, points lookup, category sidebar, product imagery, banner and shopping guide are retained. This is an interactive prototype; live backend, payments, contracts and production authorization await approval and development.",
    "ja": "従来の赤白の配色、ポイント照会、カテゴリー欄、商品画像、バナー、商品ガイドを継承しています。現在は操作できるプロトタイプです。本番バックエンド、決済、コントラクト、権限機能は確認後に開発します。"
  },
  "前台 / 首页": {
    "en": "Storefront / Home",
    "ja": "ストア / ホーム"
  },
  "商城首页实际原型截图": {
    "en": "Storefront home prototype screenshot",
    "ja": "ストアホームのプロトタイプ画面"
  },
  "商城首页": {
    "en": "Storefront home",
    "ja": "ストアホーム"
  },
  "原版OPO标识、顶部查询、分类与好物展示。": {
    "en": "Original OPO branding, balance lookup, categories and product picks.",
    "ja": "従来のOPOロゴ、上部の照会、カテゴリー、おすすめ商品。"
  },
  "原版导购形象，预算筛选及商品搜索。": {
    "en": "Original guide design, budget filters and product search.",
    "ja": "従来の商品ガイド、予算フィルター、商品検索。"
  },
  "一键兑换USDT保留在支付引导区。": {
    "en": "The USDT purchase link remains in the payment guide.",
    "ja": "USDT購入リンクは決済ガイドに残しています。"
  },
  "打开首页": {
    "en": "Open home",
    "ja": "ホームを開く"
  },
  "二级 / 商品": {
    "en": "Subpage / Products",
    "ja": "下層ページ / 商品"
  },
  "商品分类与结算实际原型截图": {
    "en": "Product categories and checkout prototype screenshot",
    "ja": "カテゴリー・決済のプロトタイプ画面"
  },
  "商品分类与结算": {
    "en": "Product categories & checkout",
    "ja": "カテゴリー・決済"
  },
  "六类目录、六款示意商品，暂无商品的分类明确为空。": {
    "en": "Six categories and six sample items; empty categories are clearly marked.",
    "ja": "6カテゴリー・6点のサンプル商品。未掲載のカテゴリーは空と明示します。"
  },
  "测试价格按全部成本×2.75展示。": {
    "en": "Demo prices use total cost × 2.75.",
    "ja": "デモ価格は総原価×2.75で表示します。"
  },
  "测试购买→积分最多抵扣50%→选择模拟付款。": {
    "en": "Try purchase → apply points up to 50% → choose demo payment.",
    "ja": "購入を試す→ポイントは50%まで→デモ決済を選択。"
  },
  "查看商品与测试结算": {
    "en": "Open products & demo checkout",
    "ja": "商品・デモ決済へ"
  },
  "二级 / 资产": {
    "en": "Subpage / Assets",
    "ja": "下層ページ / 資産"
  },
  "我的资产与支付实际原型截图": {
    "en": "Assets and payments prototype screenshot",
    "ja": "資産・決済のプロトタイプ画面"
  },
  "我的资产与支付": {
    "en": "My assets & payments",
    "ja": "資産・決済"
  },
  "链上余额、模拟余额与消费积分分开。": {
    "en": "On-chain balances, demo balances and shopping points are separate.",
    "ja": "チェーン残高・デモ残高・買い物ポイントを分けて表示します。"
  },
  "主动连接浏览器钱包，仅只读BSC余额。": {
    "en": "Opt-in browser wallet connection reads BSC balances only.",
    "ja": "利用者が接続したブラウザーウォレットからBSC残高のみ取得します。"
  },
  "币安P2P外跳，不自动下单或确认到账。": {
    "en": "External Binance P2P link; no automatic order or deposit confirmation.",
    "ja": "Binance P2Pへ移動します。自動注文や入金確認はしません。"
  },
  "查看资产与支付": {
    "en": "Open assets & payments",
    "ja": "資産・決済へ"
  },
  "二级 / 积分": {
    "en": "Subpage / Points",
    "ja": "下層ページ / ポイント"
  },
  "我的积分与认购实际原型截图": {
    "en": "Points and subscription prototype screenshot",
    "ja": "ポイント・申込のプロトタイプ画面"
  },
  "我的积分与认购": {
    "en": "Points & subscriptions",
    "ja": "ポイント・申込"
  },
  "50 USDT→模拟销毁5000 ZC→100 OPOC。": {
    "en": "50 USDT → demo burn of 5,000 ZC → 100 OPOC.",
    "ja": "50 USDT→5,000 ZCのバーンをシミュレーション→100 OPOC。"
  },
  "两倍固定权益，一年按批次释放，仅商城消费。": {
    "en": "Fixed 2× entitlement, vested by batch over one year for store purchases only.",
    "ja": "2倍相当の固定ポイントを申込ごとに1年で付与。ストア内の買い物専用です。"
  },
  "可推进测试时间，查看累计与待释放积分。": {
    "en": "Advance demo time to see vested and unvested points.",
    "ja": "デモ時間を進めて、付与済み・付与予定ポイントを確認できます。"
  },
  "体验积分释放": {
    "en": "Try points vesting",
    "ja": "ポイント付与を試す"
  },
  "二级 / LP与奖励": {
    "en": "Subpage / LP & rewards",
    "ja": "下層ページ / LP・報酬"
  },
  "LP与奖励实际原型截图": {
    "en": "LP and rewards prototype screenshot",
    "ja": "LP・報酬のプロトタイプ画面"
  },
  "模拟质押、时间加权、退出后停止新增奖励。": {
    "en": "Simulated staking, time weighting and no new rewards after unstaking.",
    "ja": "ステーキング・時間加重を試せます。解除後は新たな報酬が発生しません。"
  },
  "节点与LP奖励保持三年。": {
    "en": "Node and LP rewards remain on a three-year schedule.",
    "ja": "ノード・LP報酬は3年間です。"
  },
  "保留20%卖出费规则说明，未接真实合约。": {
    "en": "20% sell-fee rules are shown; no live contract connected.",
    "ja": "20%売却手数料の説明を表示しています。実際のコントラクトには未接続です。"
  },
  "体验LP与奖励": {
    "en": "Try LP & rewards",
    "ja": "LP・報酬を試す"
  },
  "二级 / 订单": {
    "en": "Subpage / Orders",
    "ja": "下層ページ / 注文"
  },
  "我的订单与退款实际原型截图": {
    "en": "Orders and refunds prototype screenshot",
    "ja": "注文・返金のプロトタイプ画面"
  },
  "我的订单与退款": {
    "en": "My orders & refunds",
    "ja": "注文・返金"
  },
  "先在商品页完成测试购买，即可查看订单。": {
    "en": "Complete a demo purchase to see an order here.",
    "ja": "商品ページでデモ購入すると注文を確認できます。"
  },
  "查看每单现金与积分组成。": {
    "en": "See the USDT and points breakdown for each order.",
    "ja": "各注文のUSDT・ポイント内訳を確認できます。"
  },
  "模拟退款原路恢复，防止重复退款。": {
    "en": "Demo refunds restore original tender and prevent duplicates.",
    "ja": "デモ返金では元の支払方法に戻し、二重返金を防止します。"
  },
  "查看测试订单": {
    "en": "View demo orders",
    "ja": "デモ注文を見る"
  },
  "独立后台视角 / 原型": {
    "en": "Separate admin view / Prototype",
    "ja": "管理者向け画面 / プロトタイプ"
  },
  "后台定价工作台实际原型截图": {
    "en": "Admin pricing prototype screenshot",
    "ja": "管理者向け価格設定のプロトタイプ画面"
  },
  "后台定价工作台": {
    "en": "Admin pricing workspace",
    "ja": "管理者向け価格設定"
  },
  "前台没有入口，直接#pricing也不显示工作台。": {
    "en": "No storefront entry; opening #pricing does not expose the tool.",
    "ja": "ストア側に入口はなく、#pricingでも表示しません。"
  },
  "全部成本×2.5～3；查看抵扣后现金与结余。": {
    "en": "Total costs × 2.5–3; inspect cash revenue and margin after points.",
    "ja": "総原価×2.5〜3。ポイント利用後のUSDT売上と収支を確認できます。"
  },
  "正式版本仅管理员可用；原型不代表已实现鉴权。": {
    "en": "Production is admin-only. This prototype does not implement authentication.",
    "ja": "本番は管理者専用です。このプロトタイプに認証機能はありません。"
  },
  "查看后台界面原型": {
    "en": "Open admin prototype",
    "ja": "管理画面プロトタイプへ"
  },
  "三级 / 购物结算": {
    "en": "Dialog / Checkout",
    "ja": "詳細画面 / 決済"
  },
  "积分与模拟支付": {
    "en": "Points & demo payment",
    "ja": "ポイント・デモ決済"
  },
  "测试结算截图": {
    "en": "Demo checkout screenshot",
    "ja": "デモ決済の画面"
  },
  "订单分解现金与积分，最高抵扣50%。": {
    "en": "Orders show USDT and points separately, with points capped at 50%.",
    "ja": "注文はUSDTとポイントに分け、ポイント利用は50%までです。"
  },
  "普通支付、Binance Pay与BSC付款均为模拟。": {
    "en": "Standard payment, Binance Pay and BSC payment are all simulated.",
    "ja": "通常決済・Binance Pay・BSC決済はすべてデモです。"
  },
  "需从商品点击“测试购买”进入。": {
    "en": "Open a product's demo purchase button to try it.",
    "ja": "商品から「購入を試す」を選んで進んでください。"
  },
  "从商品体验结算": {
    "en": "Try checkout from products",
    "ja": "商品から決済を試す"
  },
  "三级 / 官方外跳": {
    "en": "Dialog / Official external link",
    "ja": "詳細画面 / 公式サイトへの移動"
  },
  "一键兑换USDT": {
    "en": "Get USDT",
    "ja": "USDTを購入"
  },
  "币安P2P外跳指引截图": {
    "en": "Binance P2P guide screenshot",
    "ja": "Binance P2Pガイド画面"
  },
  "先展示流程，再由用户前往币安官方P2P。": {
    "en": "Read the guide, then choose to open official Binance P2P.",
    "ja": "手順を確認した後、利用者自身でBinance公式P2Pへ移動します。"
  },
  "不代登录，不自动成交或给商城充值。": {
    "en": "No delegated sign-in, automatic trade or store deposit.",
    "ja": "ログイン代行・自動取引・ストアへの自動入金は行いません。"
  },
  "OPOC不兑换USDT。": {
    "en": "OPOC is not redeemable for USDT.",
    "ja": "OPOCはUSDTに交換できません。"
  },
  "查看支付及外跳入口": {
    "en": "Open payments & external links",
    "ja": "決済・外部リンクへ"
  },
  "流程边界": {
    "en": "Demo scope",
    "ja": "デモの範囲"
  },
  "确认后再开发": {
    "en": "Approve before development",
    "ja": "確認後に本番開発"
  },
  "原型无真实商品、真实款项或链上执行。": {
    "en": "No live products, funds or on-chain execution in this prototype.",
    "ja": "実際の商品・資金・チェーン操作は扱いません。"
  },
  "下一步以你认可的页面和规则形成开发范围。": {
    "en": "Approved pages and rules will define the next development scope.",
    "ja": "確認済みの画面・ルールに基づいて開発範囲を定めます。"
  },
  "确认后才实现后端、生产权限及提交GitHub。": {
    "en": "Backend, production authorization and GitHub submission follow approval.",
    "ja": "バックエンド・本番権限・GitHubへの反映は確認後に実装します。"
  },
  "返回首页开始体验": {
    "en": "Return home to try the demo",
    "ja": "ホームへ戻って体験"
  },
  "原版OPO好物场景": {
    "en": "OPO product lifestyle scene",
    "ja": "OPO商品のイメージ"
  },
  "原版OPO数字导购形象": {
    "en": "OPO shopping guide illustration",
    "ja": "OPO商品ガイドのイメージ"
  },
  "请检查必填项、格式和输入范围。": {
    "en": "Check required fields, formats and input limits.",
    "ja": "必須項目、形式、入力範囲を確認してください。"
  },
  "图示文字为中文，切换语言后请打开交互页面查看本语言版本。": {
    "en": "Open the interactive page to view it in your selected language.",
    "ja": "選択した言語で確認するには、操作できるページを開いてください。"
  },
  "语言": {
    "en": "Language",
    "ja": "言語"
  },
  "测试价": {
    "en": "Demo price",
    "ja": "デモ価格"
  },
  "释放进度": {
    "en": "Vesting progress",
    "ja": "付与の進捗"
  },
  "模拟已销毁": {
    "en": "Demo burn: ",
    "ja": "デモのバーン済み数量："
  },
  "ZC（模拟，正式精度待实现）": {
    "en": "ZC (demo; production precision pending)",
    "ja": "ZC（デモ・本番の精度処理は未実装）"
  },
  "USDT记账额度": {
    "en": "USDT accounting entitlement",
    "ja": "USDT記帳額"
  },
  "1个节点": {
    "en": "1 node",
    "ja": "1ノード"
  },
  "天": {
    "en": "days",
    "ja": "日"
  },
  "第": {
    "en": "Day ",
    "ja": "第"
  },
  "人": {
    "en": "members",
    "ja": "人"
  },
  "旧资格增持示例：实际持有0 OPOC按300计权；持有1,000按1,300计权；持有5,000按5,300计权。300仅是资格基础，不是分红上限，也不是可花积分。": {
    "en": "Legacy examples: 0 spendable OPOC gives 300 weight; 1,000 gives 1,300; 5,000 gives 5,300. The 300 is the eligibility base, not a reward cap or spendable points.",
    "ja": "旧資格の例：利用可能OPOCが0なら300、1,000なら1,300、5,000なら5,300で加重します。300は資格の基礎であり、報酬上限や利用可能ポイントではありません。"
  }
};
