import process from "node:process";

import { cutil } from "@ghasemkiani/base";
import { Component } from "@ghasemkiani/webc";

class Umami extends Component {
  static {
    this.is("gk-umami");
    cutil.extend(this.prototype, {
      _id: null,
    });
  }
  get id() {
		if (cutil.na(this._id)) {
			this._id = process.env["UMAMI_ID"];
		}
		return this._id;
	}
	set id(id) {
		this._id = id;
	}
  create({ x, node }) {
    const cmp = this;
    const { id } = cmp;
    x.ch(node, "script[defer=defer,src=https://cloud.umami.is/script.js]", node => {
      x.attr(node, "data-website-id", id);
    });
  }
}

export { Umami };
