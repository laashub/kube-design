import React from "react";
import Icon from "components/Icon";
import { Columns, Column } from "components/Layout";

const companyIcons = [
  "qingcloud",
  "aws",
  "vmware",
  "kubernetes",
  "github",
  "google-plus",
  "git",
  "svn",
  "gitlab",
  "istio",
  "openpitrix",
  "kubesphere",
  "etcd",
  "aliyun",
  "power",
  "bitbucket",
  "jenkins",
  "helm",
  "sonarqube",
  "glusterfs",
  "ceph"
];

const osIcons = [
  "ubuntu",
  "debian",
  "centos",
  "fedora",
  "opensuse",
  "arch-linux",
  "coreos",
  "freebsd",
  "windows",
  "oracle-linux",
  "redhat",
  "macos",
  "ios",
  "linux"
];

const operationIcons = [
  "refresh",
  "logout",
  "restart",
  "add",
  "substract",
  "close",
  "check",
  "copy",
  "start",
  "stop",
  "cardview",
  "listview",
  "more",
  "vnc",
  "maximize",
  "minimize",
  "download",
  "upload",
  "export",
  "pull",
  "changing-over",
  "link",
  "drag-handle",
  "pause",
  "expand",
  "collapse",
  "shutdown"
];

const objectIcons = [
  "home",
  "magnifier",
  "cogwheel",
  "documentation",
  "mail",
  "file",
  "bell",
  "human",
  "key",
  "calendar",
  "clock",
  "eye",
  "hammer",
  "database",
  "bigdata",
  "container",
  "column",
  "earth",
  "picture",
  "dashboard",
  "shield",
  "enterprise",
  "car",
  "ai",
  "laptop",
  "display",
  "increase",
  "broom",
  "folder",
  "image",
  "network",
  "router",
  "ip",
  "scaling",
  "firewall",
  "timed-task",
  "star",
  "storage",
  "camera",
  "thunder",
  "lock",
  "scissors",
  "cart",
  "blockchain",
  "cdn",
  "loadbalancer",
  "information",
  "question",
  "exclamation",
  "ssh",
  "wrench",
  "pen",
  "trash",
  "filter",
  "appcenter",
  "eye-closed",
  "project",
  "creditcard",
  "resource",
  "loudspeaker",
  "cloud",
  "report",
  "monitor",
  "role",
  "passport",
  "group",
  "tag",
  "ticket",
  "wallet",
  "desktop-group",
  "paper",
  "plus-square",
  "minus-square",
  "pin",
  "error",
  "linechart",
  "barchart",
  "cluster",
  "application",
  "components",
  "backup",
  "stateful-set",
  "deamon-set",
  "catalog",
  "nodes",
  "network-router",
  "terminal",
  "coding",
  "pod",
  "cpu",
  "memory",
  "usb-redirection",
  "admin",
  "zone",
  "branch",
  "target",
  "topology",
  "job",
  "cron-job",
  "log",
  "update",
  "abtest",
  "debug",
  "theme",
  "eip",
  "eip-pool",
  "snapshot",
  "eip-group",
  "listener",
  "ip-port",
  "network-card",
  "vsan",
  "vnas",
  "mgmt-node",
  "os-service",
  "os",
  "v2v",
  "data",
  "blue-green-deployment",
  "browser",
  "mirroring",
  "cookie",
  "bird",
  "templet",
  "fuse",
  "api",
  "scheduler",
  "safe-notice",
  "login-servers",
  "login-accounts",
  "insert-chart",
  "pie-chart",
  "table-chart",
  "success",
  "record",
  "item",
  "stretch",
  "starter",
  "textfield",
  "textarea",
  "select",
  "radio",
  "slider",
  "user-overview",
  "acl",
  "licenses",
  "strategy-group",
  "dot",
  "commit",
  "port",
  "step",
  "docker",
  "bm",
  "ssd",
  "layer",
  "jar",
  "war",
  "binary",
  "csv",
  "pdf",
  "xls",
  "gateway",
  "user-profile",
  "area",
  "proportion",
  "dns",
  "vpn",
  "cpe",
  "nat",
  "certification",
  "ipv6",
  "bi",
  "price",
  "bill",
  "deal",
  "discount",
  "client",
  "approve",
  "box",
  "remark",
  "notes",
  "pe"
];

const directionIcons = [
  "chevron-down",
  "chevron-up",
  "chevron-right",
  "chevron-left",
  "caret-down",
  "caret-up",
  "caret-right",
  "caret-left",
  "next",
  "previous",
  "sort-ascending",
  "sort-descending",
  "triangle-down",
  "triangle-up",
  "triangle-right",
  "triangle-left",
  "ascending",
  "descending",
  "sorting",
  "return"
];

const languageIcons = [
  "java",
  "gradle",
  "javascript",
  "php",
  "python",
  "golang",
  "nodejs"
];

const renderIcons = function renderIcons(icons) {
  const iconColumns = icons.map(icon => (
    <Column className="is-1" key={icon}>
      <Icon name={icon} type="dark" size="large" changeable />
      <p className="annotation">{icon}</p>
    </Column>
  ));
  return <Columns className="is-multiline">{iconColumns}</Columns>;
};

export default () => (
  <div className="demo-wrapper icon-demo" style={{ textAlign: "center" }}>
    <h4>Operation</h4>
    {renderIcons(operationIcons)}
    <h4>Object</h4>
    {renderIcons(objectIcons)}
    <h4>Direction</h4>
    {renderIcons(directionIcons)}
    <h4>Company</h4>
    {renderIcons(companyIcons)}
    <h4>OS</h4>
    {renderIcons(osIcons)}
    <h4>Language</h4>
    {renderIcons(languageIcons)}
  </div>
);